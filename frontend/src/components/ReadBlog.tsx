import { format } from "date-fns";
import { Avatar } from "./BlogCard";
import { type Blog } from "../hooks";
export const ReadBlog = ({ title, content, author, createdAt }: Blog) => {
  const name = author.name;
  return (
    <div>
      <div className="flex w-5/6 mx-auto my-16">
        <div className="basis-3/4 border-r h-screen">
          <div className="text-4xl font-extrabold"> {title}</div>
          <div className="text-slate-500 my-4">
            Posted on {format(new Date(createdAt), "MMMM do, yyyy")}
          </div>
          <div className="text-base"> {content}</div>
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
