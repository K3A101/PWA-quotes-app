// Geinstalleerde packages
const bodyParser = require('body-parser');
const express = require('express');


const app = express();
const port = 5000;
const path = require("path");
// Setup de template engine ejs
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');



//Gebruikt de public folder
app.use(express.static('public'))


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Home pagina
app.get('/', (req, res) => {
    res.render("index")
    // res.send('Hello World!!!')
})

// About pagina
app.get('/about', (req, res) => {
    res.render("about")
    // res.send('Hello World!!!')
})


app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})