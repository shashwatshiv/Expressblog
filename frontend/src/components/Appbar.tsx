import Dropdown from "./Dropdown";

export const Appbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-2 border-b">
      <div className="text-2xl">Express </div>
      <div>
        <Dropdown></Dropdown>
      </div>
    </div>
  );
};
