var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
    return {
        entry: {
            'index': ['./lib/index.js']
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'cv.js',
            // publicPath: ''
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: path.join(__dirname, 'node_modules'),
                    include: path.join(__dirname, 'lib'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                },
                // {
                //     test: /\.css$/,
                //     use: 'raw-loader'
                // }
            ]
        },
        plugins: [new htmlWebpackPlugin({
            filename: '../index.html',
            title: 'Cyanea Lam-2',
            template: 'template/index.ejs',
            inject: 'body'
        })],

    };
};
