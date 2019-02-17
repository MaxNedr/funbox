const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: { main: path.resolve(__dirname, 'src', 'index.js') },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'style.css' }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin([{
            from: './src/fonts',
            to: './fonts'
        },
            {
                from: './src/favicon',
                to: './favicon'
            },
            {
                from: './src/img',
                to: './img'
            },
            {
                from: './src/uploads',
                to: './uploads'
            }
        ]),
    ]
};