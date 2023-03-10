import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/layout';
import Date from 'components/date';
import utilStyles from 'styles/utils.module.css';
import { getSortedPostsData } from 'lib/posts';
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('@/components/header-default-exports'), {
    loading: () => 'Loading...',
    // To dynamically load a component on the client side, you can use the ssr option to disable server-rendering.
    // This is useful if an external dependency or component relies on browser APIs like window.
    // ssr: false,
});
const DynamicNamedHeader = dynamic(() =>
    import('components/header-named-exports').then((mod) => mod.Header)
);

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>动态加载的Header：</div>
            <DynamicHeader />
            <DynamicNamedHeader />
            <span>测试不导出 getStaticProps 方法页面：</span>
            <Link href={`/tailwindcss`} className='hover:text-blue-600'>Tailwind Page</Link>
            <section className={utilStyles.headingMd}>
                <p>一只会飞的咩</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.) Read{' '}
                    <Link href='/posts/first-post'>this page!</Link>
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`} className='hover:text-blue-600'>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
