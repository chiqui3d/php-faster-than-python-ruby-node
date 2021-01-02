const start = (Date.now() % 1000) / 1000;
const https = require('https');
const site  = 'https://www.google.com/';

https.get(site, (res) => {
    let body = '';
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', function() {
        const strLen = body.length;
        const end = (Date.now() % 1000) / 1000;
        console.log(strLen);
        console.log(end - start);
    });
});


