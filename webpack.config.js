var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractedTextWebpackPlugin = ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        });
const SRC_DIR = path.join(__dirname, 'src');
module.exports = {
  context: SRC_DIR,
  entry : {
    index: './index.js'
  },
  output:{
    path:path.join(__dirname,'dist'),
    filename:'[name].js'
  },
  module : {
    rules:[
      {
        test: /\.scss$/,
        use: extractedTextWebpackPlugin
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer:{
    contentBase: path.join(__dirname,'dist'),
    inline:true,
    stats:'errors-only',
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(SRC_DIR,'index.html'),
      hash:true,
      chunks:['index']
    }),
    new ExtractTextPlugin("index.css"),
  ]

};
