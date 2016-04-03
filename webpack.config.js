const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');


module.exports = {

  entry: './src/app.js',
  output: {
    path:       __dirname,
    publicPath: '/',
    filename:   'app.js',
    library:    '[name]'
  },

  module: {
    loaders: [
      {
        test:    /\.js?$/,
        include: path.resolve(__dirname, "src"),
        loader:  'babel?presets[]=es2015'
      },
      {
        test:   /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test:    /\.jade$/,
        loader: "jade"
      },
      {
        test:    /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=20000'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer ({ browsers: ['last 2 versions'] }), precss];
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]

};


if (process.env.NODE_ENV === 'dev') {

  module.exports.devtool = "cheap-module-inline-source-map";
  module.exports.watch =    true;

}


if (process.env.NODE_ENV === 'stage') {

  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );

}