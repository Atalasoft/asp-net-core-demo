var path = require('path');
var extractCss = require('mini-css-extract-plugin');

module.exports = {
    entry: './scripts/app.js',
    output: {
        filename: 'bundle.js',
    },

    resolve: {
        alias: {
            'jquery-ui': 'jquery-ui-dist/jquery-ui',
            'jquery': 'jquery/dist/jquery',
            'raphael': 'raphael/raphael',
            'clipboard': 'clipboard/dist/clipboard',
            'webDocumentViewer': 'web-document-viewer/atalaWebDocumentViewer'
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [extractCss.loader, 'css-loader']
            },
            {
                test:/\.(png|gif)$/,
                loader: 'url-loader'
            }
        ]
    },

    plugins: [
        new extractCss({filename: 'bundle.css'})
    ],

    devtool: 'source-map',
    stats: 'verbose'
};