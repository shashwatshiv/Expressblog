import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";

export const Blogs = () => {
  return (
    <div>
      <Appbar></Appbar>
      <div className="items-center flex-col flex">
        <BlogCard
          title="First Blog is the best thing you can write in the world "
          publishedDate="10th October 2002"
          authorName="Shashwat Shivhare"
          content="This is the content inside the first blog and so it goes on and on and on , thus you have to ignore what i am writing at this point"
        ></BlogCard>
        <BlogCard
          title="First Blog is the best thing you can write in the world "
          publishedDate="10th October 2002"
          authorName="Shashwat Shivhare"
          content="This is the content inside the first blog and so it goes on and on and on , thus you have to ignore what i am writing at this point"
        ></BlogCard>
        <BlogCard
          title="First Blog is the best thing you can write in the world "
          publishedDate="10th October 2002"
          authorName="Shashwat Shivhare"
          content="This is the content inside the first blog and so it goes on and on and on , thus you have to ignore what i am writing at this point"
        ></BlogCard>
      </div>
    </div>
  );
};
