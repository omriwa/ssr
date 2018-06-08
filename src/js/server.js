var express = require("express");
var server = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.config.js');
const compiler = webpack(config);
const path = require("path");
const apiRouter = require("./api.js");
const accountRouter = require("./accountRoutes.js");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');



// CONFIGURATION
server.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

server.use( bodyParser.json() );       // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

server.use(express.static(path.join(__dirname, 'dist')));
// ROUTES
server.get('/', function(req, res) {
    res.render('index.html');
});
server.use('/api', apiRouter);
server.use('/account', accountRouter);
// DB
mongoose.connect('mongodb://' + process.env.IP, function(err) {
    if(err)
        console.log(err);
    else
        console.log('DB is connected');

});
// LISTEN
server.listen(process.env.PORT, function() {
    console.log('server is up');
});
