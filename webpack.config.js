const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: {
    app: './assets/js/script.js',
    events: './assets/js/events.js',
    schedule: './assets/js/schedule.js',
    tickets: './assets/js/tickets.js'
  },
  output: {
    // the name of each attribute in the entry object will be used 
    // ..in place of [name]
    filename: '[name].bundle.js',
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            // only emit images without reducing the size 
            loader: 'file-loader',
            options: {
              // always include the following
              esModule: false,
              name(file) {
                return '[path][name].[ext]';
              },
              publicPath(url) {
                return url.replace('../', '/assets/');
              }
            }
          },
          {
            // image size reducer 
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    // Whenever you work with libraries that are dependent on the use of a global variable, 
    // ..just like jQuery is with $ and jQuery, you must tell webpack to make exceptions
    // .. for these variables by using webpack.ProvidePlugin
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    // output an HTML file called report.html in dist folder
    // when set to disable , will stop reporting
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new WebpackPwaManifest({
      name: 'Food Event',
      short_name: 'Foodies',
      description: 'An app that allows you to view upcoming food events.',
      start_url: '../index.html',
      background_color: '#01579b',
      theme_color: '#ffffff',
      // fingerprints and inject are both specific to the manifest plugin
      fingerprints: false,
      inject: false,
      icons: [
        {
          src: path.resolve('assets/img/icons/icon-512x512.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons')
        }
      ]
    })
  ],
  mode: 'development'
};

module.exports = config;
