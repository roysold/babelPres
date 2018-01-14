function LeesPlugin() { }

LeesPlugin.prototype.apply = function (compiler) {
    compiler.plugin('emit', function (compilation, callback) {

        let code = compilation.assets["bundle.js"].source().replace(new RegExp("whoIsQueenOfGit", "g"), "shirchen");

        compilation.assets["bundle.js"] = {
            source: function () {
                return code;
            },
            size: function () {
                return code.length;
            }
        }
        callback();
    });

};

module.exports = LeesPlugin;