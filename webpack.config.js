
// console.log(__dirname);
// process.exit();
// console.log(__dirname + '/js/bundle.js' );

module.exports = {
    devtool: 'source-map',
    entry: __dirname + '/src/js/app.jsx',
    output: {
        path: __dirname + '/assets/js',
        pathinfo: true,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
    // devServer: {
    //     contentBase: './dist'
    // }
};