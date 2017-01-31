const path = require ('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.tsx'
    ],
    output:  {
        path:       path.join(__dirname, 'public/r_08'),
        filename:   'r_acht_app.js',
        publicPath: '/r_08/'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module:  {
        loaders: [
        {
            test:    /\.tsx?$/,
            loader:  'babel?presets[]=react,presets[]=es2016',
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.svg$/,
            loader: 'file-loader'
        },
            {
                test: /\.png$/,
                loader: 'file-loader'
            }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
}};
