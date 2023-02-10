# README

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## 新建一个项目

* 基础版 `npx create-next-app@latest`

## 技术栈

* NEXT.js
* CSS Modules
* Tailwind
* Sass
* antd5.0
* react-intl

## 命令

* `yarn dev`
* `yarn export`
* 本地开发首页 <http://localhost:3000/out>

## 执行命令记录：(改成使用 yarn)

1. 使用 node 16 版本；nextjs 13.1.1 版本；
2. 创建学习demo `npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"`
3. `cd nextjs-blog`
4. `npm run dev`
5. `npm install -D tailwindcss autoprefixer postcss` (需要创建 postcss.config.js 文件；tailwind.config.js 文件用来指定生效文件)
6. To easily get started with Tailwind CSS, check out our example.`https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss`
7. `npm install -D sass` 之后，`.scss` 或者 `.module.scss` 后缀就都可以了(或者 `npm install --save-dev sass`)
8. `npm install gray-matter` lets us parse the metadata in each markdown file.(解析固定格式的 markdown 文档头部的信息)
9. `npm install remark remark-html`
10. `npm install date-fns`
11. `yarn add fuse.js` for fuzzy search
12. `npm install antd --save`
13. `npm install --save @ant-design/icons`
14. 国际化 `yarn add react-intl` `yarn add -D babel-plugin-formatjs`

## formatjs 常用使用方式

> id 命名规则 `componentName.someUniqueIdWithInComponent` ，比如 `app.hello_world`

* IntlProvider
* FormattedDate
* FormattedTime
* FormattedRelativeTime
* FormattedNumber
* FormattedPlural
* FormattedMessage
* FormattedHTMLMessage

* Using React API `<FormattedMessage/>`（推荐使用）

```JavaScript
import {FormattedMessage} from 'react-intl';
<FormattedMessage
  description="A message" // Description should be a string literal
  defaultMessage="My name is {name}" // Message should be a string literal
  values={
    {
      name: userName,
    } // Values should be an object literal, but not necessarily every value inside
  }
/>
```

* Using imperative API `intl.formatMessage`

> Tip: The intl object should be reused as much as possible for performance.

```JavaScript
// useIntl hook: Once you've declared your IntlProvider, you can get access to the intl object via calling this hook in your functional React component
import React from 'react'
import {useIntl, FormattedDate} from 'react-intl'

const FunctionComponent: React.FC<{date: number | Date}> = ({date}) => {
  const intl = useIntl()
  // intl.formatMessage({ id : hello})
  return (
    <span title={intl.formatDate(date)}>
      <FormattedDate value={date} />
    </span>
  )
}

export default FunctionComponent
```

```JavaScript
// injectIntl HOC: In class-based React components, you can wrap them with the injectIntl HOC and intl should be available as a prop.
import React, {PropTypes} from 'react'
import {injectIntl, FormattedDate} from 'react-intl'

const FunctionalComponent = props => {
  const {
    date,
    intl, // Injected by `injectIntl`
  } = props
  return (
    <span title={intl.formatDate(date)}>
      <FormattedDate value={date} />
    </span>
  )
}

export default injectIntl(FunctionalComponent)
```

```JavaScript
// Method must be exactly `intl.formatMessage`
intl.formatMessage(
  {
    description: 'A message', // Description should be a string literal
    defaultMessage: 'My name is {name}', // Message should be a string literal
  },
  {
    name: userName,
  } // Values should be an object literal, but not necessarily every value inside
)
```

> The lifecycle of the intl object is typically tied to the locale & the list of messages that it contains, which means when you switch locale, this object should be recreated.

## eslint

* 添加 lint 命令，执行 yarn lint，自动安装 eslint 相关依赖

## .env 文件

* .env 文件中的环境变量，如果在runtime时使用，需要以 NEXT_PUBLIC_ 开头

## 其他

1. Bug：如果文件名称是 tailwind.js，则 vscode 中 Tailwind CSS IntelliSense 插件提示失效
2. 修改控制台默认 node 版本 `nvm alias default v16`
3. 三步：`scp ./next-blog.zip webuser@123.60.28.212:/srv/www/` 电脑本地文件拷贝到服务器（s-km1） -> `unzip dist.zip` 选All -> `sudo nginx -s reload`

## 问题

1. ErrorBoundary.js 文件中，为什么需要 import React ?
2. yarn start 之后，执行 yarn dev，之后在执行 yarn start 报错！yarn dev 为什么会改变 .next 文件夹里面的文件？
3. yarn export 部署之后，直接访问路径，需要带上.html（才能访问到对应的静态文件页面），为了用户体验，后端使用 Spring Boot 框架，可以通过拦截 Servlet 请求处理的过程，没有.html的路径可以自动加上.html

## 部署

三种可能性：

1. 不要对 Next.js 使用任何服务器端渲染，使用 next export 构建，并将输出与 CRA 的静态输出完全相同。（当前使用）
2. 将整个前端托管在 Vercel 上，指向我们的后端（托管在 GCP 中）。 -- TODO
3. 为 Next.js 服务器编写一个自定义的 Docker 镜像，并将其与我们的后端和其他服务一起托管在 GCP 中。 -- TODO（后期推荐使用）

利弊分析：

1. `next export` 优点：要设置的工作量几乎为 0（与 CRA 输出相同）；缺点：不支持服务器端的渲染；
2. `托管 Vercel` 优点：只需最少的设置；缺点：没有官方对 Yarn2 的支持，无法轻松连接到数据库以实现更快的服务器端渲染；
3. `自定义的 Docker 镜像` 优点：支持服务端渲染，最大的灵活性，由于 GCP 的上的托管，后端 API 调用将会非常快，可以对所需/使用的资源进行最细粒度的控制；缺点：所需的最多设置：Vercel 提供了一些示例，但它们并不是开箱即用；Kubernetes 路由 / 网络、扩展等都需要自定义设置；
