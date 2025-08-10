import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { useNavigate } from "react-router";
import axios from "axios";
import { BACKEND_URL } from "../config";
const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function postBlog(title: string, content: string) {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const data = response.data.message;
      console.log(data);
      navigate("/blogs");
    } catch (e) {
      console.log(e);
    }
  }
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
      <div className="flex justify-center m-5">
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
