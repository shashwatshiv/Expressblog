import { useState } from "react";
import { LabelledInput, DarkButton } from "../components/Auth";
import { Quote } from "../components/Quote";
import { Link } from "react-router";
import { type SigninInput } from "@shashwatshiv/expressblog-common";
import useAuth from "../hooks/useAuth";

export const Signin = () => {
  const { signin } = useAuth()!;
  const [signinInput, setSigninInput] = useState<SigninInput>({
    email: "",
    password: "",
  });
  return (
    <div className=" flex">
      <div className=" w-full md:w-1/2">
        <div className=" flex flex-col justify-center h-screen w-1/2 mx-auto ">
          <div className="text-3xl font-bold">Login</div>
          <div className="text-slate-500 font-medium mb-4">
            Don't have an Account ?
            <Link className="underline text-emerald-500 pl-2" to={"/signup"}>
              Signup
            </Link>
          </div>
          <div>
            <LabelledInput
              type="email"
              label="Email"
              placeholder="youremail@domain.com"
              onChange={(e) => {
                setSigninInput({ ...signinInput, email: e.target.value });
              }}
            ></LabelledInput>{" "}
            <LabelledInput
              type="password"
              label="Password"
              placeholder="Min. 8 characters"
              onChange={(e) => {
                setSigninInput({ ...signinInput, password: e.target.value });
              }}
            ></LabelledInput>
            <DarkButton
              onClick={() => {
                signin(signinInput);
              }}
              input="Signin"
            ></DarkButton>
            <div>
              <div>Test Email : alica@gmail.com</div>
              <div>Password : rocknroll</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden md:block">
        <Quote></Quote>
      </div>
    </div>
  );
};
