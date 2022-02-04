module.exports = function(eleventyConfig) {
    // ADD YOUR OWN WATCH TARGETS
    eleventyConfig.addWatchTarget("./assets");
    eleventyConfig.addPassthroughCopy('./assets');

    // OVERRIDE BROWSERSYNC SERVER OPTIONS
    eleventyConfig.setBrowserSyncConfig({
        notify: true
    });

    // eleventyConfig.addWatchTarget('./styles/tailwind.config.js');
    // eleventyConfig.addWatchTarget('./styles/tailwind.css');
    // eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });
    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/cdn.js': './src/js/alpine.js',
        './node_modules/axios/dist/axios.js': './src/js/axios.js'
    });
};
