const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = 
{
    entry:
    {
        index:
        [
            path.resolve('src', 'frontend', 'pages', 'index', 'index.js')
        ],
        not_found:
        [
            path.resolve('src', 'frontend', 'pages', 'not_found', 'not_found.js')
        ]
    },

    output:
    {
        filename: '[name]/bundle.js',
        path: path.resolve('_build'),
        publicPath: '/',
    },

    target: 'web',

    plugins:
    [           
        new CleanWebpackPlugin(),

        new copyWebpackPlugin(
        {
            patterns:
            [
                {
                    from: path.resolve('static')
                }
            ]
        }),

        new htmlWebpackPlugin(
        {
            filename: 'index.html',
            template: path.resolve('src', 'frontend', 'pages', 'index', 'index.html'),
            chunks: ['index']
        }),

        new htmlWebpackPlugin(
        {
            filename: 'not_found.html',
            template: path.resolve('src', 'frontend', 'pages', 'not_found', 'not_found.html'),
            chunks: ['not_found']
        }),
    ],

    module:
    {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },
            {
                test: /\.(jpe?g|png)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/images/[hash][ext]'
                }
            },
            {
                test: /\.(svg)$/,
                type: 'asset/source'
            }
        ]
    },
}