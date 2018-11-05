const path = require('path');
const pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(pathToPhaser, 'dist/phaser.min.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/game.ts',
  output: {
    filename: 'build/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'www')
  },
  optimization: {
    removeAvailableModules: false,
    splitChunks: {
      maxSize: 200000,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['www']),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html') }),
    new CopyWebpackPlugin([
      { from: './src/assets/', to: './assets/' },
      { from: './src/service-worker.js', to: './' },
      { from: './src/manifest.json', to: './' },
      { from: './src/sw-toolbox.js', to: './' }
    ])
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './www'),
    publicPath: '/www/',
    host: '127.0.0.1',
    port: 8080,
    open: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      phaser: phaser
    }
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
      { test: /phaser\.js$/, loader: 'expose-loader?Phaser' }
    ]
  }
};