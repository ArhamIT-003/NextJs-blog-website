import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-post";
import { getFeaturedPosts } from "../lib/post-util";

function Home(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allFeaturedPosts = getFeaturedPosts();

  return {
    props: {
      posts: allFeaturedPosts,
    },
  };
}

export default Home;
