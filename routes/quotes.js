const express = require('express');
const request = require('request');
const axios = require('axios');
const API_URL = 'https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1';

const router = express.Router()

router.get('/', (req, res) => {
    request(API_URL, { json: true }, (err, requestRes, body) => {
        if (err) {
            // We got an error
            res.send(err);
        } else {


            res.render('index', {
                title: 'Home',
                pageTitle: 'Design quotes'

            });
        }
    })
})

router.get('/quotes', (req, res) => {
    request(API_URL, { json: true }, (err, requestRes, body) => {
        if (err) {
            // We got an error
            res.send(err);
        } else {

            // Render the page using the 'quotes' view and our body data
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

    const id = req.params.id;
    axios.get(API_URL)
        .then( (response) =>{
            const quotes = response.data;
            const quote = quotes.find(quote => quote.id === id);
            if(quote){
                 res.render('quote', {
                title: `Quote ${id}`,
                pageTitle: `Quote ${id}`,
                quoteData: quote
            });
            }else {
                res.status(404).send('Quote not found');
            }
           
        })
        .catch(function (error) {
            // We got an error
            console.error(error);
            res.send(error);
        });
});

// Filter functie
router.get('/search', (req, res)=>{
  
 res.send('test');

})

// De offline pagina
router.get('/offline', (req, res)=> {
   res.render('offline', {
    title: 'Offline'
   })
})

// Make sure to export the router so it becomes available on imports
module.exports = router;