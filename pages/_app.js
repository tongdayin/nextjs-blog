// 全局样式入口
import 'styles/global.css';
// 全局 form 样式
import 'styles/form.css';
// 支持 Import styles from node_modules
// import 'bootstrap/dist/css/bootstrap.css'
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
