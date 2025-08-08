import { createContext } from "react";
import {
  type SigninInput,
  type SignupInput,
} from "@shashwatshiv/expressblog-common";
export interface User {
  email: string;
  name: string;
  bio?: string;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signin: (signinInput: SigninInput) => Promise<void>;
  signup: (signupInput:  SignupInput ) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
