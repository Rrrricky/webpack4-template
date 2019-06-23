const { CleanWebpackPlugin } = require('clean-webpack-plugin') // Remove old files
const path = require('path') // Handle path file (already included w/ node.js)
const webpackMerge = require('webpack-merge') // For merging the 3 webpack files
const commonConfiguration = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = webpackMerge(
    commonConfiguration,
    {
        mode: 'production',
        plugins:
        [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(),
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
                    test: /\.styl$/,
                    use:
                    [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'stylus-loader'
                    ]
                }
            ]
        }
    }
)                