var express = require("express");
var server = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.config.js');
const compiler = webpack(config);
const path = require("path");
const apiRouter = require("./api.js");
const bodyParser = require("body-parser");


// CONFIGURATION
server.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));

server.use(express.static(path.join(__dirname,'dist')));
// ROUTES
server.get('/',function(req,res){
    res.render('index.html');
});
server.use('/api',apiRouter);
// LISTEN
server.listen(process.env.PORT,function(){
    console.log('server is up');
});

