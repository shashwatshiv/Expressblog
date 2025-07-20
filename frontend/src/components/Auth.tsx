import { type ChangeEvent } from "react";

export const Auth = () => {};
export const DarkButton = ({
  input,
  onClick,
}: {
  input: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4 "
    >
      {input}
    </button>
  );
};
interface LabelledInputType {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const LabelledInput = ({
  label,
  type,
  placeholder,
  onChange,
}: LabelledInputType) => {
  return (
    <div className="mb-2">
      <label className="block mb-1 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};
