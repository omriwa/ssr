var express = require("express");
var server = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.config.js');
const compiler = webpack(config);

server.use(webpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));

server.get('/',function(req,res){
    res.send('work');
});

server.listen(process.env.PORT,function(){
    console.log('server is up');
});