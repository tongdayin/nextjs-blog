import { remark } from 'remark';
import html from 'remark-html';

// Parse each markdown file and get title, date, and file name (which will be used as id for the post URL).
// List the data on the index page, sorted by date.

// fs is a Node.js module that let's you read files from the file system.
// path is a Node.js module that let's you manipulate file paths.
// matter is a library that let's you parse the metadata in each markdown file.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // 也可以发送请求
    // Note: Next.js polyfills fetch() on both the client and server. You don't need to import it.
    // const res = await fetch('..');
    // return res.json();

    // 也可以使用操作数据库的sdk等，直接查询数据库，因为 getStaticProps 只在服务端运行

    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    // const res = await fetch('..');
    // const posts = await res.json();
    // return posts.map((post) => {
    //     return {
    //         params: {
    //             id: post.id,
    //         },
    //     };
    // });

    const fileNames = fs.readdirSync(postsDirectory);

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
    
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
