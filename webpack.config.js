var Encore = require('@symfony/webpack-encore');
var path = require('path');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    // .setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .createSharedEntry('base', 'assets/js/base.js')
    .addEntry('home/index', 'assets/js/home/index.js')
    .copyFiles({
        from: './assets/images',        
        pattern: /\.(png|jpg|jpeg)$/
    })

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()
    .enableSourceMaps(!Encore.isProduction())
    .enableSassLoader()
    .cleanupOutputBeforeBuild()
    .enableVersioning()
    .autoProvidejQuery()
    .addAliases({
        'assets': path.resolve(__dirname, './assets')
    })
    .configureWatchOptions(watchOptions => {
        watchOptions.poll = true;
        watchOptions.ignored = [
            'node_modules',
            'vendor'
        ];
    })
;

if (!Encore.isProduction()) {
    Encore.enableBuildNotifications();
}

module.exports = Encore.getWebpackConfig();
