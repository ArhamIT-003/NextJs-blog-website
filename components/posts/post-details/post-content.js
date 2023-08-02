import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const { title, slug, image, content } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customComponents = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const images = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={images.properties.src}
              alt={images.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} slug={slug} />
      <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
