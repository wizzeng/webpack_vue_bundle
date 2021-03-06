const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        jQuery: path.resolve(__dirname, '../vendors/fake_jQuery.js'),
        main: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:6].js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    loader: {

    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        new CleanWebpackPlugin()
    ]
}
