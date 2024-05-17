import { Navigate, Outlet } from "react-router-dom";
const ProtectedRouteDoctors = () => {
  let auth = {
    token: localStorage.getItem("token"), // Get the token from local storage
    role: localStorage.getItem("role"), // Get the role from local storage
  };
  return auth.token && auth.role === "doctor" ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorizedpage" />
  );
};

export default ProtectedRouteDoctors;
