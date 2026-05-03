const axios = require('axios');
const cheerio = require('cheerio');

async function crawl(startUrl, maxPages = 5) {
  const visited = new Set();
  const queue = [startUrl];
  const pages = [];
  
  let baseUrl;
  try {
    const urlObj = new URL(startUrl);
    baseUrl = urlObj.origin;
  } catch (e) {
    throw new Error('Invalid URL');
  }

  while (queue.length > 0 && visited.size < maxPages) {
    const url = queue.shift();
    if (visited.has(url)) continue;
    
    visited.add(url);
    
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
        timeout: 10000,
      });
      
      const $ = cheerio.load(response.data);
      pages.push({ url, $ });
      
      // Find internal links for multi-page crawl
      $('a[href]').each((_, el) => {
        let href = $(el).attr('href');
        if (!href || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
        
        try {
          // Resolve relative URLs and normalise
          const nextUrlObj = new URL(href, baseUrl);
          // Only same domain, avoid hashes/queries to prevent duplicate content
          if (nextUrlObj.origin === baseUrl) {
            const cleanUrl = nextUrlObj.origin + nextUrlObj.pathname;
            if (!visited.has(cleanUrl) && !queue.includes(cleanUrl)) {
              queue.push(cleanUrl);
            }
          }
        } catch (e) {
          // Ignore invalid URLs
        }
      });
    } catch (error) {
      console.error(`Crawler error on ${url}:`, error.message);
      // Continue crawling other pages even if one fails
    }
  }
  
  return pages;
}

module.exports = { crawl };
