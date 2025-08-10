import { createContext } from "react";
import {
  type SigninInput,
  type SignupInput,
} from "@shashwatshiv/expressblog-common";

interface AuthContextType {
  isAuthenticated: boolean;
  signin: (signinInput: SigninInput) => Promise<void>;
  signup: (signupInput: SignupInput) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
