const axios = require('axios');
require('dotenv').config({ path: '.env.local' });

async function listOpenRouterModels() {
    try {
        const response = await axios.get('https://openrouter.ai/api/v1/models', {
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`
            }
        });

        const freeModels = response.data.data
            .filter(m => m.id.includes(':free'))
            .map(m => m.id);

        console.log('Available Free Models:', freeModels);
    } catch (error) {
        console.error('Error fetching OpenRouter models:', error.response?.data || error.message);
    }
}

listOpenRouterModels();
