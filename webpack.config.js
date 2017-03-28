var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'eval-source-map',
    context: path.join(__dirname, 'src'),
    entry: [
            './app/app.js', 
            './css/app.css'
            ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                use: 'babel',
                include: path.join(__dirname, 'src'),
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            { 
                test: /\.(png|jpg)$/, 
                use: 'url-loader?limit=8192' 
            },
                        { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                use: 'file-loader'
            },
            { 
                test: /\.(woff|woff2)$/, 
                use: 'url-loader?prefix=font/&limit=5000' 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                use: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                use: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        open: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            hash: true
        }),
        new ExtractTextPlugin('src/css/app.css'),
    ]
};