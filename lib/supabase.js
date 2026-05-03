const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY;

let supabase = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn("Supabase credentials missing. Persistence disabled.");
}

async function saveAudit(auditData) {
  if (!supabase) return null;

  try {
    const { data, error } = await supabase
      .from('audits')
      .insert([
        {
          domain: auditData.domain,
          pages_crawled: auditData.pages_crawled,
          inventory: auditData.inventory,
          scorecard: auditData.scorecard,
          findings: auditData.findings,
          recommendations: auditData.recommendations
        }
      ]);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Supabase Save Error:", error.message);
    return null;
  }
}

module.exports = { supabase, saveAudit };
