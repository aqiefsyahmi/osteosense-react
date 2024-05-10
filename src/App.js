import React from "react";
import "./App.css";

// Importing components from react-router-dom for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing custom components for different pages
import Login from "./pages/LoginAdmin";
import LoginD from "./pages/LoginDoctors";
import Doctors from "./pages/Doctors";
import ListUserPage from "./pages/ListUserPage";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import useToken from "./pages/useToken";
import Header from "./pages/Header";

function App() {
  const { token, removeToken, setToken } = useToken();

  return (
    <div className="vh-100 gradient-custom">
      <div className="container">
        {/* Page header */}
        <h1 className="page-header text-center">Welcome To OsteoSense!</h1>

        {/* BrowserRouter component to define routes */}
        <BrowserRouter>
          {!token && token !== "" && token !== undefined ? (
            <LoginD setToken={setToken} />
          ) : (
            <>
              <Header token={removeToken} />
              <Routes>
                <Route path="/" element={<Login />} />

                <Route
                  path="/doctors"
                  element={<Doctors token={token} setToken={setToken} />}
                />

                <Route path="/test" element={<ListUserPage />} />

                <Route path="/addnewuser" element={<CreateUser />} />

                <Route path="/user/:id/edit" element={<EditUser />} />
              </Routes>
            </>
          )}

          {/* <Routes>
            <Route path="/" element={<Login />} />

            <Route setToken={setToken} path="/logind" element={<LoginD />} />

            <Route path="/doctors" element={<Doctors />} />

            <Route path="/test" element={<ListUserPage />} />

            <Route path="/addnewuser" element={<CreateUser />} />

            <Route path="/user/:id/edit" element={<EditUser />} />
          </Routes> */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
