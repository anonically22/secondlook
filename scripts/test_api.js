const analyze = require('../api/analyze');
require('dotenv').config({ path: '.env.local' });

// Bypass SSL verification for local testing
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test() {
    const mockReq = {
        method: 'POST',
        body: { url: 'https://example.com' }
    };

    const mockRes = {
        status: (code) => {
            console.log('Status:', code);
            return mockRes;
        },
        json: (data) => {
            console.log('Response JSON:', JSON.stringify(data, null, 2));
            return mockRes;
        }
    };

    console.log('Testing /api/analyze with https://example.com...');
    await analyze(mockReq, mockRes);
}

test().catch(console.error);
