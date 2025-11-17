let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "/src/index.tsx",
    output: {
        filename: "bundle.js",
        globalObject: 'this',
        umdNamedDefine: true,
    },
    node: { global: true },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /.worker.ts$/, type: 'javascript/auto' },
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.json",
                    transpileOnly: true
                }
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            fileName: 'index.html',
            inject: true
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.DefinePlugin({
            global: function() {
                return this;
            }
        })
    ],
    devServer: {
        hot: true,
        compress: false,
        liveReload: true,
    },
    watch: true,
    // stats: 'verbose',
};
