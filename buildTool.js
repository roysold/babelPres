var LeesPlugin = require("./lees-plugin");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devServer: {
        port: 3000,
        contentBase: "./build",
        inline: true
    },
    plugins: [
        new LeesPlugin()
    ]
}