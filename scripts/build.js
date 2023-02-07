// TODO copy build/dist 文件到单独的 build 项目中

const fs = require('fs-extra');

function copyPublicFolder() {
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: (src) => {
            return src !== paths.appHtml && src.indexOf(paths.WeChatGraphics) === -1;
        },
    });
}
