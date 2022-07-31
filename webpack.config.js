const webpack = require("webpack")
const path = require('path');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3010,
        watchContentBase: true,
    },
    plugins: [
        new webpack.DefinePlugin(
            {"process.env.API_URL": JSON.stringify("http://localhost:3001")}
        )
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
};