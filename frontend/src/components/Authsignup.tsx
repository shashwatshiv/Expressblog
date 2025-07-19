import type { ChangeEvent } from "react";
import { Link } from "react-router";

export const Authsignup = () => {
  return (
    <div className=" flex flex-col justify-center h-screen w-1/2 mx-auto ">
      <div className="text-3xl font-bold">Create an Account</div>
      <div className="text-slate-500 font-medium mb-4">
        Already have an account ?
        <Link className="underline text-blue-600 pl-2" to="/signin">
          Sign in
        </Link>
      </div>
      <div>
        <LabelledInput
          label="Name"
          placeholder="Full Name"
          onChange={(e) => {}}
        ></LabelledInput>
        <LabelledInput
          label="Email"
          placeholder="youremail@domain.com"
          onChange={(e) => {}}
        ></LabelledInput>{" "}
        <LabelledInput
          label="Password"
          placeholder="Min. 8 characters"
          onChange={(e) => {}}
        ></LabelledInput>
      </div>
    </div>
  );
};
interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const LabelledInput = ({
  label,
  placeholder,
  onChange,
}: LabelledInputType) => {
  return (
    <div className="mb-2">
      <label className="block mb-1 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <input
        type="text"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};
