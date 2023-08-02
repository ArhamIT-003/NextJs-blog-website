import AllPost from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/post-util";

function Posts(props) {
  return (
    <section>
      <AllPost posts={props.posts} />
    </section>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default Posts;
