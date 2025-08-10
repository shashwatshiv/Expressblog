import { FaPenNib } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
export const Appbar = () => {
  const { isAuthenticated } = useAuth()!;
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-10 py-3 border-b bg-neutral-50">
      <div
        className="flex items-center gap-2"
        onClick={() => {
          navigate("/");
        }}
      >
        <div className="h-8 w-8 rounded-md bg-emerald-500 flex items-center justify-center">
          <FaPenNib className="text-black" />
        </div>
        <span className="font-semibold text-xl">Express Log</span>
      </div>
      {isAuthenticated ? (
        <div className="flex items-center justify-between">
          <Link
            to="/write"
            className="mx-8 inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400  text-sm px-3 py-2 transition-colors"
          >
            Write
          </Link>
          <Dropdown></Dropdown>
        </div>
      ) : (
        <Link
          to="/signin"
          className="mx-8 inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 font-normal  text-sm px-3 py-2 transition-colors"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};
