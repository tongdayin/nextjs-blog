import 'styles/vars.css';
// 全局 form demo 样式
// import 'styles/form.css';
// 支持 Import styles from node_modules
// import 'bootstrap/dist/css/bootstrap.css'
// antd reset.css 中的 默认 font-family: sans-serif; 需要被覆盖掉
// 在 styles/global.css中，使用 tailwind 中的 font-family 覆盖
import 'antd/dist/reset.css';
// 全局样式入口
import 'styles/global.css';
// 全局统一布局
// import Layout from 'components/layout'
import ErrorBoundary from 'components/ErrorBoundary';

export default function App({ Component, pageProps }) {
    // return <Component {...pageProps} />;
    return (
        // Wrap the Component prop with ErrorBoundary component
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    );
    // 全局统一布局
    // return (
    //     <Layout>
    //         <Component {...pageProps} />
    //     </Layout>
    // );
    // 每页单独布局
    // Use the layout defined at the page level, if available
    // const getLayout = Component.getLayout || ((page) => page); // 默认布局 (page) => page 可以改成 <Layout>{page}</Layout> 么？？？
    // return getLayout(<Component {...pageProps} />);
}
