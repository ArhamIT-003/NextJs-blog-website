import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-post";
import { GetFeaturedPosts } from "../lib/post-util";
import Head from "next/head";

function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Arham's Blog</title>
        <meta
          name="description"
          content="I write programming blog post for web development and help people in collaborating"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allFeaturedPosts = GetFeaturedPosts();

  return {
    props: {
      posts: allFeaturedPosts,
    },
  };
}

export default Home;
