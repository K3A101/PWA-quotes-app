
const express = require('express');

// Create  new express app in 'app'
const app = express();
const port = 5000;
const path = require("path");
// Setup de template engine ejs
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');



//Gebruikt de public folder
app.use(express.static('public'))



// Get our route file
var quotesRouter = require('./routes/quotes');
//An express zeggen om quotes.js bestand te gebruiken vor quotes router
app.use('/', quotesRouter);



app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})