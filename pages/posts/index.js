import { Fragment } from "react";
import AllPost from "../../components/posts/all-post";
import { GetAllPosts } from "../../lib/post-util";
import Head from "next/head";

function Posts(props) {
  return (
    <Fragment>
      <Head>
        <title>All Post</title>
        <meta
          name="description"
          content="A List of my all posts for web development to help other people in their careers."
        />
      </Head>
      <AllPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = GetAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default Posts;
