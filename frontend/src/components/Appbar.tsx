import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="flex justify-between px-10 py-4 border-b">
      <div className="text-2xl">Express </div>
      <div>
        <Avatar size="big" name="Shashwat"></Avatar>
      </div>
    </div>
  );
};
