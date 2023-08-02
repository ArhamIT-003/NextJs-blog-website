import classes from "./all-posts.module.css";
import PostGrid from "./posts-grid";

function AllPost(props) {
  const { posts } = props;
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid post={posts} />
    </section>
  );
}

export default AllPost;
