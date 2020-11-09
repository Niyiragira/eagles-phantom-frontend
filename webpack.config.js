import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rule: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/indexjs'
        })
    ]
}