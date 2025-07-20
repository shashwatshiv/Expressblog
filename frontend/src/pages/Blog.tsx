import { useBlog } from "../hooks";
import { useParams } from "react-router";
export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>Blog</div>;
};
