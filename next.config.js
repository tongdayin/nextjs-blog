const path = require('path');

module.exports = {
    basePath: '/out',
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
};
