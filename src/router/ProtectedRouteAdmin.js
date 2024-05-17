import { Navigate, Outlet } from "react-router-dom";
const ProtectedRouteAdmin = () => {
  let auth = {
    token: localStorage.getItem("token"), // Get the token from local storage
    role: localStorage.getItem("role"), // Get the role from local storage
  };
  return auth.token && auth.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorizedpage" />
  );
};

export default ProtectedRouteAdmin;
