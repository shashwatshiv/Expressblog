import { format } from "date-fns";
import { Avatar } from "./BlogCard";
import { type Blog } from "../hooks";
export const ReadBlog = ({ title, content, author, createdAt }: Blog) => {
  const name = author.name;
  return (
    <div>
      <div className=" block md:flex  w-5/6 mx-auto my-16 min-h-screen">
        <div className="basis-3/4 border-b my-4 md:border-r md:pr-10 ">
          <div className="text-4xl font-extrabold"> {title}</div>
          <div className="text-slate-500 my-4">
            Posted on {format(new Date(createdAt), "MMMM do, yyyy")}
          </div>
          <div className="text-base">
            <p> {content}</p>
          </div>
        </div>
        <div className="basis-1/4 px-8">
          <div>Author</div>
          <div className="flex items-center my-8">
            <Avatar user={name} size="big"></Avatar>
            <div className="text-xl font-semibold mx-4">{author.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
