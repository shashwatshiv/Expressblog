import { Quote } from "../components/Quote";
import { DarkButton, LabelledInput } from "../components/Auth";
import { useState } from "react";
import { type SignupInput } from "@shashwatshiv/expressblog-common";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
import { BACKEND_URL } from "../config";
export const Signup = () => {
  const [signupInput, setSignupInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        signupInput,
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blog");
    } catch (error) {
      console.log(error);
      alert("Error is signup");
    }
  }
  return (
    <div className=" flex">
      <div className=" w-full md:w-1/2">
        <div className=" flex flex-col justify-center h-screen w-1/2 mx-auto ">
          <div className="text-3xl font-bold">Create an Account</div>
          <div className="text-slate-500 font-medium mb-4">
            Already have an account ?
            <Link className="underline text-blue-600 pl-2" to={"/signin"}>
              Sign In
            </Link>
          </div>
          <div>
            <LabelledInput
              type="text"
              label="Name"
              placeholder="Full Name"
              onChange={(e) => {
                setSignupInput({ ...signupInput, name: e.target.value });
              }}
            ></LabelledInput>
            <LabelledInput
              type="email"
              label="Email"
              placeholder="youremail@domain.com"
              onChange={(e) => {
                setSignupInput({ ...signupInput, email: e.target.value });
              }}
            ></LabelledInput>{" "}
            <LabelledInput
              type="password"
              label="Password"
              placeholder="Min. 8 characters"
              onChange={(e) => {
                setSignupInput({ ...signupInput, password: e.target.value });
              }}
            ></LabelledInput>
            <DarkButton onClick={sendRequest} input="Signup"></DarkButton>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden md:block">
        <Quote></Quote>
      </div>
    </div>
  );
};
