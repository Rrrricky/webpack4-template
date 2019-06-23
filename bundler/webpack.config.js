const path = require('path') // Handle path file (already included w/ node.js)
const HtmlWebpackPlugin = require('html-webpack-plugin') // Generate index.html
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // Remove old files
const webpack = require('webpack') // For using hot reload

module.exports = {
  devtool: 'source-map', // Knowing which file has an error
  entry: './src/index.js', 
  output: {
    filename: 'bundle.[hash].js', // Name of the output file + cache breaker
    path: path.resolve(__dirname, '../dist') // Directory for the output file
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use:[
        'style-loader',
        'css-loader' 
      ]
    }, 
    {
      test: /\.(jpg|png|gif|svg)$/,
      use: [
      {
        loader: 'file-loader',
        options:
        {
          outputPath: 'images/'
        }
      }]
    }, 
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use:[
      {
        loader: 'file-loader',
        options:
        {
          outputPath: 'fonts/'
        }
      }]
    },
    {
      test: /\.(html)$/,
      use: ['html-loader']
    }, 
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader'
      ]
    }
  ]},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      minify: true,
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
      contentBase: './dist', // Folder to server
      open: true // Open url automatically
  },
}


