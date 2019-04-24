const path    = require('path');

var nodeExternals = require("webpack-node-externals"); 
module.exports = () => {
    return { 
        target: "node", 
        externals: nodeExternals(), 
        entry:  {   server: ["./express.ts"] }, 
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
        }
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
