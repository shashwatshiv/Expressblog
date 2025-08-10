import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
import {
  type SigninInput,
  type SignupInput,
} from "@shashwatshiv/expressblog-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyToken() {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/verify-token`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response.data.validUser);

        if (response.data.validUser) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (localStorage.getItem("token") !== null) {
      verifyToken();
    }
  }, []);

  async function signup(signupInput: SignupInput) {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        signupInput,
      );

      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("name", response.data.name);
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

      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("name", response.data.name);
      setIsAuthenticated(true);

      navigate("/blogs");
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/");
  };
  const value = {
    logout,
    signup,
    signin,
    isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
