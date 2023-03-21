
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
var postsRouter = require('./routes/quotes');
// Tell express to use our posts.js file for /posts routes
app.use('/', postsRouter);



app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})