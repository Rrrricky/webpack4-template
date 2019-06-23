const { CleanWebpackPlugin } = require('clean-webpack-plugin') // Remove old files
const path = require('path') // Handle path file (already included w/ node.js)
const webpackMerge = require('webpack-merge') // For merging the 3 webpack files
const commonConfiguration = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin") // Minify css from sass

module.exports = webpackMerge(
    commonConfiguration,
    {
        mode: 'production',
        plugins:
        [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(),
            new OptimizeCSSAssets()
        ],
        module:
        {
            rules:
            [
                {
                    test: /\.css$/,
                    use:
                    [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }, 
                {
                    test: /\.scss$/,
                    use:
                    [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    }
)                