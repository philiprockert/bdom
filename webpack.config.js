const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3001;

module.exports = {
    name :'express-serve',
    entry: './src/index.ts',
    target: 'node',
    mode: NODE_ENV,
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions:['.js','.ts'],
    },
    module: {
        rules:[
            {
                test:/\.(js)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
            test: /\.ts$/,
            use: ['ts-loader',]
            }
        ]
    }
}
