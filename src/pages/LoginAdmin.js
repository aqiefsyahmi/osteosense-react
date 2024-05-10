import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginAdmin() {
  const navigate = useNavigate();

  const handleLoginAdmin = () => {
    // Perform your login logic here

    // Navigate to the "admin" page if login is successful
    navigate("/admin");
  };

  const handleLoginDoctors = () => {
    // Perform your login logic here

    // Navigate to the "doctors" page if login is successful
    navigate("/logind");
  };

  return (
    <>
      <h1>Sign In Admin</h1>
      <div>Username</div>
      <input type="text" className="form-control" />
      <div>Password</div>
      <input type="password" className="form-control" />
      <button className="btn btn-sm btn-primary" onClick={handleLoginAdmin}>
        Login
      </button>
      <div>
        Are you a doctor?{" "}
        <button className="btn btn-sm btn-primary" onClick={handleLoginDoctors}>
          Yes
        </button>
      </div>
      <Link to="/test" className="btn btn-success">
        Test Page
      </Link>
    </>
  );
}
