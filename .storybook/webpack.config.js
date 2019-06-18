const path = require("path");

module.exports = ({ config, mode }) => {
    if (mode === "PRODUCTION") {
        config.devtool =false;
        config.optimization = {};
    }

    config.module.rules.push({
        test: /\.tsx?$/,
        loaders: [
            {
                loader: "babel-loader",
                options: {
                    babelrc: false,
                    extends: path.join(process.cwd(), "./.babelrc")
                }
            },
            "awesome-typescript-loader"
        ]
    });

    return config;
};
