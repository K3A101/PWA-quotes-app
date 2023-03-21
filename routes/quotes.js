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
                title: 'Home'

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
                postData: body
            });
        }
    })
})

// // Create a route for our detail page
// router.get('/quotes/:id', function (req, res) {
//     request(`https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1/quotes/${req.params.id}`, { json: true }, function (err, requestRes, body) {
//         if (err) {
//             // We got an error
//             res.send(err);
//         } else {
//             // Render the page using the 'post' view and our body data
//             res.render('post', {
//                 title: `Post ${req.params.id}`,
//                 postData: body
//             });
//         }
//     });
// });

// Make sure to export the router so it becomes available on imports
module.exports = router;