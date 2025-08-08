import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth()!;

  if (isAuthenticated) {
    return <Outlet></Outlet>;
  }
  if (!isAuthenticated) {
    alert("Signin to Continue");
    return <Navigate to={"/signin"} replace />;
  }
};
export default ProtectedRoutes;
