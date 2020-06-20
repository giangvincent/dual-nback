const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");

module.exports = {
    baseUrl: './',
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        },
        devServer: {
            https: true,
            port: 8000
        },
        productionSourceMap: false,
        configureWebpack: {
            // optimization: {
            //   splitChunks: 'all'
            // },
            plugins: [
                new PurgecssPlugin({
                    paths: glob.sync([
                        // path.join(__dirname, './src/index.html'),
                        path.join(__dirname, "./**/*.vue"),
                        path.join(__dirname, "./src/**/*.js")
                    ])
                })
                // new BundleAnalyzerPlugin()
            ]
        }
    }
}
