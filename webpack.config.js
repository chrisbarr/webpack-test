var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
      entry: "./entry.js",
      second: "./second.js"
    },
    output: {
        path: __dirname,
        filename: "[name]-bundle.js"
    },
    // externals: {
    //   'jquery': 'jquery'
    // },
    plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
      // extensions: ["", ".js"],
      // root: [path.join(__dirname, 'bower_components')],
      alias: {
        jquery: './bower_components/jquery/dist/jquery.js'
      }
    }
};
