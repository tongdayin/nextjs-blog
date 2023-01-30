This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## 技术栈：
* NEXT.js
* CSS Modules
* Tailwind
* Sass

## 执行命令记录：(改成使用 yarn)
1. 使用 node 16 版本；nextjs 13.1.1 版本；
2. 创建学习demo `npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"` (基础版 npx create-next-app@latest )
3. `cd nextjs-blog`
4. `npm run dev`
5. `npm install -D tailwindcss autoprefixer postcss` (需要创建 postcss.config.js 文件；tailwind.config.js 文件用来指定生效文件)
6. To easily get started with Tailwind CSS, check out our example.`https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss`
7. `npm install -D sass` 之后，`.scss` 或者 `.module.scss` 后缀就都可以了(或者 `npm install --save-dev sass`)
8. `npm install gray-matter` lets us parse the metadata in each markdown file.(解析固定格式的 markdown 文档头部的信息)
9. `npm install remark remark-html`
10. `npm install date-fns`

## eslint
* 添加 lint 命令，执行 yarn lint，自动安装 eslint 相关依赖