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
};
