//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('build'));

app.get('/*', (req, res) => {
    console.log("listen port 8080");
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);