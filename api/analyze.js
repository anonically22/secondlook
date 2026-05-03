const { crawl } = require('../lib/crawler');
const { buildRegistry } = require('../lib/registry');
const { compareVariants } = require('../lib/comparator');
const { generateScores } = require('../lib/scorer');
const { interpretResults } = require('../lib/interpreter');
const { saveAudit } = require('../lib/supabase');

module.exports = async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { url } = req.body || {};

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    let targetUrl = url;
    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = 'https://' + targetUrl;
    }

    let domain;
    try {
      domain = new URL(targetUrl).hostname;
    } catch (e) {
      return res.status(400).json({ error: 'Invalid URL provided' });
    }

    // 1. Crawl multiple internal pages (max 5)
    const pages = await crawl(targetUrl, 5);
    
    if (!pages || pages.length === 0) {
      return res.status(400).json({ error: 'Could not crawl the provided URL.' });
    }

    // 2. Build product-wide component registry
    const registry = buildRegistry(pages);

    // 3. Compare variants & detect design drift
    const driftFindings = compareVariants(registry);

    // 4. Generate system-level heuristic scores
    const scorecard = generateScores(registry.globalInventory, {
      buttonVariants: registry.systemVariantsCount.buttons,
      cardVariants: registry.systemVariantsCount.cards,
      inputVariants: registry.systemVariantsCount.inputs
    });

    const structuredData = {
      domain,
      pagesCrawled: pages.map(p => p.url),
      registry,
      driftFindings,
      scorecard
    };

    // 5. AI Interpretation (Product Level)
    const aiAnalysis = await interpretResults(structuredData);

    // 6. Assemble final structured report
    const finalAudit = {
      domain,
      pages_crawled: pages.length,
      executiveSummary: aiAnalysis.executiveSummary || "",
      inventory: registry.globalInventory,
      scorecard: scorecard,
      findings: [...driftFindings, ...(aiAnalysis.findings || [])],
      recommendations: aiAnalysis.recommendations || []
    };

    // 7. Save to Supabase Product Memory
    await saveAudit(finalAudit);

    res.status(200).json(finalAudit);
  } catch (error) {
    console.error("Analyze API Error:", error);
    res.status(500).json({ 
      error: error.message || 'Internal Server Error',
      executiveSummary: "Audit failed due to a server error.",
      inventory: {},
      scorecard: {},
      findings: [],
      recommendations: []
    });
  }
};
