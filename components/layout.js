import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import profilePic from '../public/images/profile.jpg';

const name = '大飞咩';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    // 这里可以使用 useEffect 获取数据，渲染布局等
    // Because this file is not a Page, you cannot use getStaticProps or getServerSideProps currently.
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href={`${process.env.BASE_PATH}/favicon.ico`} />
                <meta
                    name='description'
                    content='Learn how to build a personal website using Next.js'
                />
                <meta
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name='og:title' content={siteTitle} />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        {/* Local Images: src */}
                        <Image
                            priority
                            src={profilePic}
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt='Picture of the author'
                            // width={500} automatically provided
                            // height={500} automatically provided
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        {/* Remote Images: src */}
                        <Link href='/'>
                            <Image
                                priority
                                // src={`${process.env.BASE_PATH}/images/profile.jpg`}
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile.jpg`}
                                className={utilStyles.borderCircle}
                                // Because Next.js does not have access to remote files during the build process
                                // you'll need to provide the width, height and optional blurDataURL props manually:
                                height={108}
                                width={108}
                                alt=''
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href='/' className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href='/'>← Back to home</Link>
                </div>
            )}
        </div>
    );
}
