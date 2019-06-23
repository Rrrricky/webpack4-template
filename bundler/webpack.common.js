const HtmlWebpackPlugin = require('html-webpack-plugin') // Generate index.html
const path = require('path') // Handle path file (already included w/ node.js)
const CopyWebpackPlugin = require('copy-webpack-plugin') // Prevent static files to go through loaders

module.exports = {
    entry: './src/index.js',
    output:
    {
        filename: 'bundle.[hash].js', // Nma of output file + cache breaker
        path: path.resolve(__dirname, '../dist') // Directory for output file
    },
    plugins:
    [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true
        }), 
        new CopyWebpackPlugin([ { from: 'static' } ]),
    ],
    devtool: 'source-map',
    module:
    {
        rules:
        [
            {
                test: /\.(jpg|png|gif|svg)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                use:
                [
                    'babel-loader'
                ]
            },
        ]
    }
}


