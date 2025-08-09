import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { postBlog } from "../hooks";
const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center">
        <div className="flex-col flex w-3/4 h-screen border-gray-100">
          <input
            type="text"
            placeholder="Title"
            className="text-4xl m-10 p-4 border-none outline-none"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Start Expressing Yourself Right Now... "
            className="p-6 border rounded-md h-screen text-lg resize-y outline-none"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center m-5 ">
        <button
          onClick={() => {
            postBlog(title, content);
          }}
          className=" bg-emerald-500 p-4 hover:bg-emerald-400 text-white font-semibold py-3 rounded-md transition-colors "
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default WriteBlog;
