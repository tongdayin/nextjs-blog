import Head from 'next/head';
import Date from 'components/date';
import Layout from 'components/layout';
// 每页单独布局
// import NestedLayout from 'components/nested-layout' 
import { getAllPostIds, getPostData } from 'lib/posts';

import utilStyles from 'styles/utils.module.css';

// getStaticProps and getStaticPaths run only on the server-side and will never run on the client-side.
// Moreover, these functions will not be included in the JS bundle for the browser.
// That means you can write code such as direct database queries without sending them to browsers.

// This function gets called at build time
// getStaticPaths must be used with getStaticProps
export async function getStaticPaths() {
    // When this is true (in preview environments) don't
    // prerender any static pages
    // (faster builds, but slower initial page load)
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            paths: [],
            fallback: 'blocking',
        };
    }

    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    // paths 取值实例：paths = [{ params: { id: 1 } }, { params: { id: '2' } }];
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, // { fallback: false } means other routes should 404.
    };
}

// This function also gets called at build time
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

// 每页单独布局
// Post.getLayout = function getLayout(page) {
//     return (
//         <Layout>
//             <NestedLayout>{page}</NestedLayout>
//         </Layout>
//     );
// };
