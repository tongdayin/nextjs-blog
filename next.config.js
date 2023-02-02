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
};
