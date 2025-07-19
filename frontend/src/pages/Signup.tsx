import React from "react";
import { Quote } from "../components/Quote";
import { Authsignup } from "../components/Authsignup";
export const Signup = () => {
  return (
    <div className=" flex">
      <div className=" w-1/2">
        <Authsignup></Authsignup>
      </div>
      <div className="w-1/2 hidden md:block">
        <Quote></Quote>
      </div>
    </div>
  );
};
