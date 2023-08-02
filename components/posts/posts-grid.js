import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

function PostGrid(props) {
  const { post } = props;
  return (
    <ul className={classes.grid}>
      {post.map((post) => (
        <PostItem posts={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
