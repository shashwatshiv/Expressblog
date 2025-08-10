import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import { format } from "date-fns";
import { useState } from "react";
import Loading from "../components/Loading";
export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  if (loading) {
    return (
      <div>
        <Appbar></Appbar>

        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="">
      <Appbar></Appbar>
      <div className="flex justify-center">
        <div className="w-1/2   flex-col flex">
          {currentBlogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate={format(new Date(blog.createdAt), "dd MMMM yyyy")}
            ></BlogCard>
          ))}
          {/* <BlogCard
          id={69}
          title="First Blog is the best thing you can write in the world "
          publishedDate="10th October 2002"
          authorName="Shashwat Shivhare"
          content="This is the content inside the first blog and so it goes on and on and on , thus you have to ignore what i am writing at this point"
        ></BlogCard> */}

          <div className="justify-center flex">
            {Array.from({ length: totalPages }).map((_, i) => {
              return (
                <button
                  className={
                    currentPage == i + 1
                      ? "bg-emerald-500 text-black rounded-md py-2 px-3 mx-1 my-5"
                      : "bg-neutral-100 text-black rounded-md py-2 px-3 mx-1 my-5"
                  }
                  onClick={() => {
                    setCurrentPage(i + 1);
                  }}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
