const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = ({ config, mode }) => {
    const debug = mode !== "PRODUCTION";

    if (!debug) {
        config.devtool = false;
        config.optimization = {};
    }

    config.resolve.extensions = [
        ...config.resolve.extensions,
        ".ts",
        ".tsx"
    ];
    config.resolve.modules.push(path.resolve(__dirname, "../src"));
    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.tsx?$/,
            loaders: [
                {
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        extends: path.join(process.cwd(), "./.babelrc")
                    }
                },
                "awesome-typescript-loader",
                {
                    loader: require.resolve("@storybook/addon-storysource/loader"),
                    options: {
                        parser: "typescript"
                    }
                }
            ]
        },
        {
            test: /\.(css|scss)$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: debug,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function (loader) {
                                const plugins = [
                                    require("autoprefixer")({ remove: false }),
                                ];
                                if (!debug) {
                                    plugins.push(require("cssnano")());
                                }
                                return plugins;
                            },
                            sourceMap: debug,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [
                                path.resolve(__dirname + "./"),
                            ]
                        }
                    }
                ]
            })
        }
    ];

    config.plugins.push(new ExtractTextPlugin({
        filename: `styles.css`,
        publicPath: "/"
    }));

    return config;
};
