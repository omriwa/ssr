var router = require("express").Router();

// api request for 
var apiRequest = require('request-promise');



router.use(function(req, res, next) {
    // .. some logic here .. like any other middleware
    next();
});
// routes of api
router.get('/latest', function(req, res) {
    apiRequest('http://data.fixer.io/api/latest?access_key=79c91d1041686f6a21cf4dc9dfdf0b2a')
        .then(function(htmlString) {
            res.send(htmlString);
        })
        .catch(function(err) {
            // Crawling failed...
        });
});
router.get('/historical', function(req, res) {
    apiRequest('http://data.fixer.io/api/historical?access_key=79c91d1041686f6a21cf4dc9dfdf0b2a')
        .then(function(htmlString) {
            res.send(htmlString);
        })
        .catch(function(err) {
            // Crawling failed...
        });
});
router.get('/convert', function(req, res) {
    apiRequest('http://data.fixer.io/api/convert?access_key=79c91d1041686f6a21cf4dc9dfdf0b2a')
        .then(function(htmlString) {
            res.send(htmlString);
        })
        .catch(function(err) {
            // Crawling failed...
        });
});
router.get('/timeseries', function(req, res) {
    apiRequest('http://data.fixer.io/api/timeseries?access_key=79c91d1041686f6a21cf4dc9dfdf0b2a')
        .then(function(htmlString) {
            res.send(htmlString);
        })
        .catch(function(err) {
            // Crawling failed...
        });
});
router.get('/fluctuation', function(req, res) {
    apiRequest('http://data.fixer.io/api/fluctuation?access_key=79c91d1041686f6a21cf4dc9dfdf0b2a')
        .then(function(htmlString) {
            res.send(htmlString);
        })
        .catch(function(err) {
            // Crawling failed...
        });
});

module.exports = router;
