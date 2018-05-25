const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        style: './src/style/style.scss'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
        
    },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [new HtmlWebPackPlugin()]
}