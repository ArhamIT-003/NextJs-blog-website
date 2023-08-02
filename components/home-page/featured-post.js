import classes from "./featured-posts.module.css";
import PostGrid from "../posts/posts-grid";

function FeaturedPost(props) {
  const { posts } = props;
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid post={posts} />
    </section>
  );
}

export default FeaturedPost;
