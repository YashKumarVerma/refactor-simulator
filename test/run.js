// create instance of express server
const express = require('express');
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

// start listening on post
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`open http://localhost:${port} to run tests`);
    opn(`http://localhost:${port}`);
});
