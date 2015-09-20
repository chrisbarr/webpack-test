var path = require('path');

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
      // extensions: ["", ".js"],
      root: [path.join(__dirname, 'bower_components')]
      // alias: {
      //   jquery: './bower_components/jquery/dist/jquery.js'
      // }
    }
};
