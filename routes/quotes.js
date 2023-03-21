const express = require('express');
const request = require('request');

const router = express.Router()

router.get('/', (req,res)=>{
    request('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1', { json: true }, (err, requestRes, body) => {
        if (err) {
            // We got an error
            res.send(err);
        } else {

            // Render the page using the 'posts' view and our body data
            res.render('index',{
                title: 'Home',
                pageTitle: 'Design quotes'

            });
        }
    })
})

router.get('/quotes', (req, res) =>{
    request('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1', {json:true}, (err, requestRes, body) =>{
        if (err) {
            // We got an error
            res.send(err);
        } else {
           
            // Render the page using the 'posts' view and our body data
            res.render('quotes', {
                title: 'Quotes', // We use this for the page title, see views/partials/head.ejs
                pageTitle: 'All the quotes',
                quoteData: body
            });
        }
    })
})

// About pagina
router.get('/about', (req, res) => {
    
    res.render('about', {
        title: 'About',
        pageTitle: 'About Design Quotes'
    });
    
})

// Create a route for our detail page
router.get('/quotes/:id', function (req, res) {
    request(`https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1/quotes/${req.params.id}`, { json: true }, function (err, requestRes, body) {
        if (err) {
            // We got an error
            res.send(err);
        } else {
            // Render the page using the 'post' view and our body data
            res.render('quote', {
                title: `Quote ${req.params.id}`,
                pageTitle: `Quote ${req.params.id}`,
                quoteData: body.quote
            });
        }
    });
});

// Make sure to export the router so it becomes available on imports
module.exports = router;