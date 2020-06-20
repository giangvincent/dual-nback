module.exports = {
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
        publicPath: "./",
        productionSourceMap: false
    }
}
