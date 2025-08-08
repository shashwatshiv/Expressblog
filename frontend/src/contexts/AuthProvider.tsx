import React, { useState } from "react";
import { useNavigate } from "react-router";
import { type User, AuthContext } from "./AuthContext";
import {
  type SigninInput,
  type SignupInput,
} from "@shashwatshiv/expressblog-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  async function signup(signupInput: SignupInput) {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        signupInput,
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      setIsAuthenticated(true);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      alert("Error in signup");
    }
  }

  async function signin(signinInput: SigninInput) {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        signinInput,
      );
      console.log(response);
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      setIsAuthenticated(true);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };
  const value = {
    user,
    logout,
    signup,
    signin,
    isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
