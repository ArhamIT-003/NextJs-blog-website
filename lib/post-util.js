import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function GetAllFilesName() {
  return fs.readdirSync(postDirectory);
}

export function GetAllPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // remove file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function GetAllPosts() {
  const postFiles = GetAllFilesName();

  const allPosts = postFiles.map((postFile) => GetAllPostData(postFile));

  let sortedPost = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPost;
}

export function GetFeaturedPosts() {
  const allPosts = GetAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
