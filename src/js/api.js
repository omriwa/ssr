var router = require("express").Router();

// api request for 
var apiRequest = require('request');
var apiRequestFunction = function(url) {//api function for readabilty
    apiRequest(url, function(error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
}


router.use(function(req, res, next) {
    // .. some logic here .. like any other middleware
    next();
});
// routes of api
router.get('/1', function(req, res) {
    apiRequestFunction('http://data.fixer.io/api/latest?access_key=79c91d1041686f6a21cf4dc9dfdf0b2a');
    res.send(req.url);
});
router.get('/2', function(req, res) {
    res.send(req.url);
});
router.get('/3', function(req, res) {
    res.send(req.url);
});
router.get('/4', function(req, res) {
    res.send(req.url);
});
router.get('/5', function(req, res) {
    res.send(req.url);
});

module.exports = router;
