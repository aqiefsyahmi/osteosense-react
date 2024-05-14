import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderDoctor from "../components/DoctorsHeader";
import HeaderAdmin from "../components/AdminHeader";

function Header({ token, role }) {
  const navigate = useNavigate();

  const logOut = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/logout",
    })
      .then((response) => {
        token();
        localStorage.removeItem("email");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <div>
      {role === "admin" ? (
        <HeaderAdmin token={token} logOut={logOut} />
      ) : (
        <HeaderDoctor token={token} logOut={logOut} />
      )}
    </div>
  );
}

export default Header;
