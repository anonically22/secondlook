const axios = require('axios');
const cheerio = require('cheerio');

// Only load dotenv and disable SSL verification in non-production/local environments
if (!process.env.VERCEL) {
    require('dotenv').config({ path: '.env.local' });
    // Disable SSL verification for development to avoid local issuer certificate issues
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

module.exports = async (req, res) => {
    // 1. Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed'
        });
    }

    const { url } = req.body;

    // 2. Validate URL
    if (!url) {
        return res.status(400).json({
            success: false,
            message: 'URL is required'
        });
    }

    try {
        new URL(url);
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: 'Invalid URL format'
        });
    }

    try {
        // 3. Fetch HTML content with enhanced headers to avoid 403s
        let response;
        try {
            response = await axios.get(url, {
                timeout: 8000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Referer': 'https://www.google.com/'
                }
            });
        } catch (fetchError) {
            console.error('Scraping Error:', fetchError.message);
            return res.status(403).json({
                success: false,
                message: 'This website blocks automated analysis. Try a different URL.'
            });
        }

        const html = response.data;
        const $ = cheerio.load(html);

        // 4. Extract metadata
        const title = $('title').text() || $('meta[property="og:title"]').attr('content') || $('h1').first().text() || '';
        const description = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || '';

        if (!title && !description) {
            return res.status(422).json({
                success: false,
                message: 'Unable to extract meaningful metadata from this site.'
            });
        }

        // 5. OpenRouter API Logic
        const openRouterApiKey = process.env.OPENROUTER_API_KEY;

        if (!openRouterApiKey || openRouterApiKey === 'DUMMY_OPENROUTER_KEY_REPLACE_LATER') {
            return res.status(500).json({
                success: false,
                message: 'OpenRouter API key is not configured'
            });
        }

        try {
            const openRouterResponse = await axios.post(
                'https://openrouter.ai/api/v1/chat/completions',
                {
                    model: 'google/gemma-3-4b-it:free',
                    messages: [
                        {
                            role: 'user',
                            content: `You are a UX critic generating thoughtful product teardowns. 
                            
                            Based on this website content, generate a concise product summary and first impression UX critique in a thoughtful editorial tone.
                            
                            Title: ${title}
                            Description: ${description}
                            
                            Return the response in JSON format with exactly these two keys: "summary" and "firstImpression". Do not include any other text or markdown formatting outside the JSON.`
                        }
                    ]
                },
                {
                    headers: {
                        'Authorization': `Bearer ${openRouterApiKey}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const resultText = openRouterResponse.data.choices[0].message.content;

            // Clean up backticks if model returns them
            const cleanedJson = resultText.replace(/```json|```/g, '').trim();
            const aiData = JSON.parse(cleanedJson);

            // 6. Return structured JSON
            return res.status(200).json({
                success: true,
                summary: aiData.summary,
                firstImpression: aiData.firstImpression
            });

        } catch (aiError) {
            console.error('AI Error Detailed:', aiError.response?.data || aiError.message);
            throw new Error(`AI analysis failed: ${aiError.message}`);
        }

    } catch (error) {
        console.error('API Error:', error.message);
        if (error.response) {
            console.error('Error Status:', error.response.status);
            console.error('Error Data:', error.response.data);
        }

        return res.status(500).json({
            success: false,
            message: `Analysis failed: ${error.message}`,
            debug: error.stack
        });
    }
};
