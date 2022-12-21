import path from "path";
import { readFileSync } from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import readTime from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";

export default class MDXContent {
  /* Takes folder as argument and find all the files inside that */
  constructor(folderName) {
    this.POST_PATH = path.join(process.cwd(), folderName);
  }

  /* Get all the slugs in the requested folder which has .mdx extension
   * It splits the path and gets only the slug part
   */
  getSlugs() {
    const paths = sync(`${this.POST_PATH}/*.mdx`);
    return paths.map((path) => {
      const parts = path.split("/");
      const fileName = parts[parts.length - 1];
      const [slug, _ext] = fileName.split(".");
      return slug;
    });
  }

  /* It's just to get the front matter not the full blog  */
  getFrontMatter(slug) {
    const postPath = path.join(this.POST_PATH, `${slug}.mdx`);
    const source = readFileSync(postPath);
    const { content, data } = matter(source);
    const readingTime = readTime(content);

    if (data.published) {
      return {
        slug,
        readingTime,
        excerpt: data.excerpt ?? "",
        title: data.title ?? slug,
        date: (data.date ?? new Date()).toString(),
        stringDate: data.stringDate ?? "",
        keywords: data.keywords ?? "",
        image: data.image ?? "https://imgur.com/aNqa9cE.png",
      };
    }
  }

  /* get the single post from slug (it's a full post with the content)  */
  async getPostFromSlug(slug, force = false) {
    const postPath = path.join(this.POST_PATH, `${slug}.mdx`);
    const source = readFileSync(postPath);
    const { content, data } = matter(source);
    if (!data.published && !force) return { post: null };

    // getting front matter
    const frontMatter = this.getFrontMatter(slug);

    /* code theme options */
    const prettyCodeOptions = {
      theme: "one-dark-pro",
      onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
          node.children = [{ type: "text", value: " " }];
        }
      },
      // Feel free to add classNames that suit your docs
      onVisitHighlightedLine(node) {
        node.properties.className.push("highlighted");
      },
      onVisitHighlightedWord(node) {
        node.properties.className = ["word"];
      },
    };

    /* serializing the markdown and passing the rehype plugins as MDX supports them */
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behaviour: "wrap" }],
          [rehypePrettyCode, prettyCodeOptions],
        ],
      },
    });
    return {
      post: {
        content: mdxSource,
        tableOfContents: this.getTableOfContents(content),
        meta: frontMatter,
      },
    };
  }

  /* Getting all posts 
    - First find all slugs
    - then map for each slug and get the front matter of that post
    - then filter the posts by date 
    - return as an array
  */
  getAllPosts() {
    const posts = this.getSlugs()
      .map((slug) => {
        return this.getFrontMatter(slug, false);
      })
      .filter((post) => post != null || post != undefined) // Filter post if it is not published
      .sort((a, b) => {
        if (new Date(a.date) > new Date(b.date)) return -1;
        if (new Date(a.date) < new Date(b.date)) return 1;
        return 0;
      });

    return posts;
  }

  /* Generate the table of contents for the blog
    - using a regular expression to get the headings of the blog only h2 to h6 then 
    - then generating levels a heading and removing # from the heading and returning as an array
  */
  getTableOfContents(markdown) {
    const regXHeader = /#{2,6}.+/g;
    const headingArray = markdown.match(regXHeader)
      ? markdown.match(regXHeader)
      : [];
    return headingArray.map((heading) => {
      return {
        level: heading.split("#").length - 1 - 2, // we starts from the 2nd heading that's why we subtract 2 and 1 is extra heading text
        heading: heading.replace(/#{2,6}/, "").trim(),
      };
    });
  }
}
