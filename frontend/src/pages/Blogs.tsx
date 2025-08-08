import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import { format } from "date-fns";
export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar></Appbar> <div>Loading...</div>{" "}
      </div>
    );
  }

  return (
    <div>
      <Appbar></Appbar>
      <div className="items-center flex-col flex">
        {blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            authorName={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate={format(new Date(blog.createdAt), "dd MMMM yyyy")}
          ></BlogCard>
        ))}
        <BlogCard
          id={69}
          title="First Blog is the best thing you can write in the world "
          publishedDate="10th October 2002"
          authorName="Shashwat Shivhare"
          content="This is the content inside the first blog and so it goes on and on and on , thus you have to ignore what i am writing at this point"
        ></BlogCard>
      </div>
    </div>
  );
};
