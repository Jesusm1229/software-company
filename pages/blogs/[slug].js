/* import { useEffect } from "react";
import BlogLayout from "../layout/BlogLayout"; // ========> not created yet
import Metadata from "../components/MetaData";
import MDXComponents from "../components/MDXComponents"; // =====> will create in the end of the section
import PageNotFound from "pages/404"; // =======> not created yet
import MDXContent from "../lib/MDXContent";
import { MDXRemote } from "next-mdx-remote";
import "highlight.js/styles/atom-one-dark.css";

export default function Post({ post, error }) {
  if (error) return <PageNotFound />;

  return (
    <>
      <Metadata
        title={post.meta.title}
        description={post.meta.excerpt}
        previewImage={post.meta.image}
        keywords={post.meta.keywords}
      />

      <BlogLayout post={post}>
        <MDXRemote
          {...post.source}
          frontmatter={post.meta}
          components={MDXComponents}
        />
      </BlogLayout>
    </>
  );
} */

/* Generating the page for every slug */
/* export async function getStaticProps({ params }) {
  const { slug } = params;
  const { post } = await new MDXContent("posts").getPostFromSlug(slug);

  if (post != null) {
    return {
      props: {
        error: false,
        post: {
          meta: post.meta,
          source: post.content,
          tableOfContents: post.tableOfContents,
        },
      },
    };
  } else {
    return {
      props: {
        error: true,
        post: null,
      },
    };
  }
} */

/* Generating all possible paths for the slug */
/* export async function getStaticPaths() {
  const paths = new MDXContent("posts")
    .getSlugs()
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
 */
