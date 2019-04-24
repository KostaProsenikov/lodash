const path    = require('path');
const webpack = require('webpack');

var nodeExternals = require("webpack-node-externals"); 
module.exports = () => {
    return { 
        target: "web", 
        externals: nodeExternals(), 
        resolve: {
            extensions: ['.js', '.jsx', '.ts']
        },
        entry:  {   server: ["./express.ts"] },
        devServer: {
            host: 'localhost',
            contentBase: path.join(__dirname, "/dist"),
            watchContentBase: true,
            compress: true,
            port: 3000,
            historyApiFallback: true,
            inline: true,
            proxy: {
                '^/api/*': {
                    target: 'http://localhost:3333/api/',
                    secure: false
                }
            }
        }, 
        output: {   path: path.join(__dirname, '/dist'),
                    filename: 'bundle.js',
        },
        module: 
        { rules: 
            [{  
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [{ loader: "babel-loader",
                options: {
                    presets: ['babel-preset-env']
                } 
                }]
            }],
        },
        plugins: [
        ]
    }
}

// module.exports = {
// resolve: {
//     extensions: ['.js', '.jsx', '.ts']
// },
// context: __dirname,
// entry: {
//     app: ['./express.ts']
// },
// output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'bundle.js'
// },
// module: {
//     rules: [
//         {
//             test: /\.js$/,
//             exclude: /node_modules/,
//             use: {
//                 loader: "ts-loader"
//             }
//         }
//     ]
// }
// };
