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
            console.log('\n[DEBUG] Status Code:', code);
            return mockRes;
        },
        json: (data) => {
            console.log('\n[DEBUG] Response Body:', JSON.stringify(data, null, 2));
            return mockRes;
        }
    };

    console.log('Testing /api/analyze with https://example.com...');
    try {
        await analyze(mockReq, mockRes);
    } catch (err) {
        console.error('\n[FATAL] Script Error:', err);
    }
}

test().catch(console.error);
