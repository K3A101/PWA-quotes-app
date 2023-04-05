// Express importeren
const express = require('express');

//Nieuwe server aanmaken
const app = express();
const port = 5000;
const path = require("path");
let options = { maxAge: '2y' }
const minifyHTML = require('express-minify-html');

// Setup de template engine ejs
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');



//Gebruikt de public folder
app.use(express.static('public', options))



// Installeer de route betsand in de server
var quotesRouter = require('./routes/quotes');
//An express zeggen om quotes.js bestand te gebruiken voor quotes router
app.use('/', quotesRouter);

app.use(minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        minifyJS: true
    }
}));

// Server gehost op port 5000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})