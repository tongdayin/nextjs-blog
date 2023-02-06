const path = require('path');

module.exports = {
    basePath: '/out',
    // 这里 env 下面的环境变量优先级高于 .env 文件中的环境变量
    env: {
        BASE_PATH: '/out',
        SKIP_BUILD_STATIC_GENERATION: false,
    },
    images: {
        unoptimized: true,
    },
    // 配置saas编译器
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    // },
    compiler: {
        // Remove all console.* calls
        removeConsole: true,
        // Remove console.* output except console.error
        // removeConsole: {
        //     exclude: ['error'],
        // },
    },
    modularizeImports: {
        lodash: {
            transform: 'lodash/{{member}}',
            // The compiler will throw an error if you try to import the full lodash library (instead of using named imports):
            // Compiler error
            // import lodash from 'lodash'
            preventFullImport: true,
        },
    },
    // 开启 source map（默认开发开启，生产关闭）
    // productionBrowserSourceMaps: true,
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-US', 'fr', 'nl-NL'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en-US',
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
        domains: [
            // For example: if you have pages/blog.js the following urls will be available:
            // example.com/blog
            // www.example.com/blog
            // example.fr/blog
            // example.nl/blog
            // example.nl/nl-BE/blog
            {
                // Note: subdomains must be included in the domain value to be matched
                // e.g. www.example.com should be used if that is the expected hostname
                domain: 'example.com',
                defaultLocale: 'en-US',
            },
            {
                domain: 'example.nl',
                defaultLocale: 'nl-NL',
                // specify other locales that should be redirected
                // to this domain
                locales: ['nl-BE'],
            },
            {
                domain: 'example.fr',
                defaultLocale: 'fr',
                // an optional http field can also be used to test
                // locale domains locally with http instead of https
                http: true,
            },
        ],
    },
};
