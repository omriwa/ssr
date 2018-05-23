var express = require("express");
var server = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.config.js');
const compiler = webpack(config);
const path = require("path");


// CONFIGURATION
server.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));

server.use(express.static(path.join(__dirname,'dist')));

server.get('/',function(req,res){
    // res.render('dist/index.html');
    res.send('ssss');
});

server.listen(process.env.PORT,function(){
    console.log('server is up');
});