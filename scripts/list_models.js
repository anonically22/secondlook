const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: '.env.local' });

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    try {
        // There is no direct listModels in the simple SDK, but we can try to fetch a specific one or use the REST API
        const axios = require('axios');
        const response = await axios.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
        console.log('Available Models:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('List Models Error:', error.response?.data || error.message);
    }
}

listModels();
