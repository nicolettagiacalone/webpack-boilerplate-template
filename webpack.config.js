const path = require('path');
const webpack = require('webpack');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Define your Wordpress Theme's path (optional)
const WP_PATH = 'wp-content/themes/';

// Define your Theme's folder
const THEME_PATH = 'theme/';

/* Define your assets' folder */
const ASSETS_PATH = 'assets/';

/* Define the folder where to put your compiled assets */
const BUILD_PATH = 'dist';

module.exports = {
  mode: 'production',
  entry: {
    bundle: './webpack.js'
  },
  output: {
    // e.g. Output path for Wordpress Themes
    // path: path.resolve(__dirname, WP_PATH + THEME_PATH + ASSETS_PATH + BUILD_PATH),
    path: path.resolve(__dirname, THEME_PATH + ASSETS_PATH + BUILD_PATH),
    filename: '[name].js',
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devtool: 'source-map',
  target: 'web',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theme.bundle.css'
    }),
    /**
      * Use the ProvidePlugin to load modules globally:
      * Some modules rely on the presence of specific globals.
      * Like Bootstrap, rely on jQuery and Popper.js plugins.
    **/
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./theme directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['theme'] }
    }),
    new WebpackBuildNotifierPlugin({
      title: 'Theme Webpack Build',
      logo: path.resolve("./favicon.png"),
      suppressSuccess: true
    })
  ]
};
