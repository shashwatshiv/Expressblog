import { useBlog } from "../hooks";
import { useParams } from "react-router";
import { Appbar } from "../components/Appbar";
import { ReadBlog } from "../components/ReadBlog";
export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  if (loading || !blog) {
    return (
      <div>
        <Appbar></Appbar>
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div>
      <Appbar></Appbar>
      <ReadBlog
        id={blog.id}
        title={blog.title}
        content={blog.content}
        author={blog.author}
        createdAt={blog.createdAt}
      ></ReadBlog>
    </div>
  );
};
