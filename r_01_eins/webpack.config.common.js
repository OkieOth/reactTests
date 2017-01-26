const path = require ('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output:  {
        path:       path.join(__dirname, 'public/dist'),
        filename:   'r_eins_app.js',
        publicPath: '/dist'
    },
    module:  {
        loaders: [
        {
            test:    /\.js$/,
            loader:  'babel',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.svg$/,
            loader: 'file-loader'
        }
        ]
}};
