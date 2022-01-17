const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader', 'css-loader', 'sass-loader'
            ]
        }]
    },
    resolve: {
    extensions: ['.jsx', '.js'],
  },
    mode: 'development'
};