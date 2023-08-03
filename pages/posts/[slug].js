import PostContent from "../../components/posts/post-details/post-content";
import { GetAllFilesName, GetAllPostData } from "../../lib/post-util";

function SinglePost(props) {
  return (
    <section>
      <PostContent post={props.post} />
    </section>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = GetAllPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFiles = GetAllFilesName();

  const slugs = postFiles.map((extension) => extension.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default SinglePost;
