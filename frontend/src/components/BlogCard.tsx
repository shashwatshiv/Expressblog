import { Link } from "react-router";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}
export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex-col flex gap-y-2 border-b p-4 border-slate-300 pb-4">
        <div className=" text-sm gap-1 flex items-center">
          <Avatar user={authorName}></Avatar>
          <div className="font-light">{authorName}</div>
          <div className=" text-slate-500 font-thin">
            {"· " + publishedDate}
          </div>
        </div>
        <div className="font-semibold text-xl">{title}</div>
        <div className="text-slate-800">{content.slice(0, 100) + " ..."}</div>
        <div className="text-slate-500 text-sm">
          {Math.ceil(content.length / 200) + " min read"}
        </div>
      </div>
    </Link>
  );
};

export const Avatar = ({
  user,
  size = "small",
}: {
  user: string;
  size?: "small" | "big";
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-5 h-5" : "w-8 h-8"
      } overflow-hidden bg-gray-400 rounded-full`}
    >
      <span
        className={`font-medium ${
          size === "small" ? "" : "text-xl"
        } text-gray-100`}
      >
        {user.slice(0, 1)}
      </span>
    </div>
  );
};
