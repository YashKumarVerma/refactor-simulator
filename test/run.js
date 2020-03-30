// create instance of express server
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

// automatically open test page
const opn = require('opn');

// set port of application
const port = process.env.PORT || 3000;

// load static assets into server relative urls
app.use('/modules', express.static('./modules'));
app.use('/node_modules', express.static('./node_modules'));
app.use('/tests', express.static('./test'));

// server on the root page
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/testRunner.html`);
});

async function worker() {
    // open a new browser
    const browser = await puppeteer.launch({ headless: false });

    // open a new page
    const page = await browser.newPage();

    // open the test url
    await page.goto(`http://localhost:${port}`);

    // wait for 5 seconds to end execution
    await page.waitFor(1000 * 5);

    // screenshot
    await page.screenshot({
        path: './testResult.png',
    });

    // close browser
    await page.close();
}

// start listening on post
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`open http://localhost:${port} to run tests`);
    opn(`http://localhost:${port}`);

    // worker();
});
