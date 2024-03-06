const express = require('express');
const SiteOpsBot = require('siteopsguardian');
const app = express();
const port = 3002;

app.get('/status', async (req, res) => {
    if (!req.query.url) {
        return res.status(400).send('URL parameter is required.');
    }
    
    const statusMessage = await SiteOpsBot.checkSiteStatus(req.query.url);
    res.send(`<p>Status of ${req.query.url}: ${statusMessage}</p>`);
});

app.listen(port, () => {
    console.log(`SiteOpsWebStatus running at http://localhost:${port}`);
});
