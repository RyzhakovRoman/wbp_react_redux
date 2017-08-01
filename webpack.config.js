'use strict';
const webpack = require('webpack');
const dev = __dirname + '/src/dev';
const prod = __dirname + '/src/prod';

module.exports = {
    context: dev,
    entry: {
        appprod: './app',
        testprod: './test'
    },
    output: {
        path: prod,
        filename: '[name].js',
        publicPath: './prod/',
        library: '[name]'
    },
    watch: true,
    resolve: {
        extensions: ['.jsx', '.js', '.less']
    },
    resolveLoader: {
        modules: ['node_modules'],
        moduleExtensions: ['-loader'],
        extensions: ['.config.js', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx/,
                loader: 'babel'
            },
            {
                test: /\.css/,
                loader: 'style!css'
            },
            {
                test: /\.less/,
                loader: 'style!css!less'
            }
        ]
    },
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: 'common',
    //         minChunks: 2,
    //         chunks: ['appprod', 'testprod']
    //     })
    // ]
};