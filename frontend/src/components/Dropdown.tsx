import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Avatar } from "./BlogCard";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

export default function Downdown() {
  const navigate = useNavigate();
  const value = useContext(AuthContext);
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold outline-none text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50">
        <Avatar size="big" user="Shashwat"></Avatar>
      </MenuButton>

      <MenuItems
        transition
        className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              onClick={() => {
                navigate("/user");
              }}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Profile Settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              onClick={() => {
                value?.logout();
              }}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Logout
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
