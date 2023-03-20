
const express = require('express')
const app = express()
const port = 5000

// Setup de template engine ejs
// app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

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
    console.log(`Example app listening on port ${port}`)
})