const webpack = require('webpack') // For using hot reload
const webpackMerge = require('webpack-merge') // For merging the 3 webpack files
const commonConfiguration = require('./webpack.common.js') 

module.exports = webpackMerge(
    commonConfiguration,
    {
        mode: 'development',
        plugins:
        [
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer:
        {
            contentBase: './dist', // Folder to server
            open: true, // Auto open url
            hot: true
        }, 
        module: {
          rules: 
          [
            { 
              test: /\.css$/,
              use:
              [
                  'style-loader',
                  'css-loader'
              ]
            },
            {
              test: /\.scss$/,
              use:
              [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
              ]
            }
          ], 
        }, 
    }
)