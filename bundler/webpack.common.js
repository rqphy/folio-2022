const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const pages = [
    'home',
    'project1',
    // 'project2',
]

module.exports = {
    entry: pages.reduce((config, page) =>
    {
        config[page] = path.resolve(__dirname, `../src/pages/${page}/${page}.js`)
        return config
    }, {}),
    output:
    {
        hashFunction: 'xxhash64',
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization:
    {
        splitChunks:
        {
            chunks: "all"
        }
    },
    devtool: 'source-map',
    plugins: [].concat(
        pages.map(
            page =>
                new HtmlWebpackPlugin({
                    inject: true,
                    template: path.resolve(__dirname, `../src/pages/${page}/index.html`),
                    minify: true,
                    filename: `pages/${page}/index.html`,
                    chunks: [page]
                })
        ),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
    ),
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use:
                [
                    'html-loader'
                ]
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // CSS
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/images/[hash][ext]'
                }
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/fonts/[hash][ext]'
                }
            }
        ]
    }
}
