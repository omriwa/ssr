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
const MongoClient = require('mongodb').MongoClient;


// CONFIGURATION
server.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

server.use(express.static(path.join(__dirname, 'dist')));
// ROUTES
server.get('/', function(req, res) {
    res.render('index.html');
});
server.use('/api', apiRouter);
server.use('/account', accountRouter);
// DB
MongoClient.connect(process.env.IP, function(err, client) {
    if(err)
        console.log('DB is disconnected');
    else
        console.log('DB is connected');

});
// LISTEN
server.listen(process.env.PORT, function() {
    console.log('server is up');
});
