const path    = require('path');

module.exports = {
resolve: {
    extensions: ['.js', '.jsx', '.ts']
},
context: __dirname,
entry: {
    app: ['./file.ts']
},
output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
},
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
    ]
}
};