import Image from "next/image";
import classes from "./post-item.module.css";
import Link from "next/link";

function PostItem(props) {
  const { title, image, date, excerpt, slug } = props.posts;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <Link href={linkPath} className={classes.link}>
      <li className={classes.post}>
        <div className={classes.image}>
          <Image src={imagePath} width={300} height={200} layout="responsive" />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </li>
    </Link>
  );
}

export default PostItem;
