import React from "react";
import "./App.css";

// Importing components from react-router-dom for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing custom components for different pages
// import Login from "./pages/LoginAdmin";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";
import Admin from "./pages/Admin";
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
            <Login setToken={setToken} />
          ) : (
            <>
              <Header token={removeToken} />
              <Routes>
                {/* <Route path="/" element={<Login />} /> */}

                <Route
                  path="/doctors"
                  element={<Doctors token={token} setToken={setToken} />}
                />

                <Route
                  path="/admin"
                  element={<Admin token={token} setToken={setToken} />}
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
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginDoctors from "./LoginDoctors";
// import LoginAdmin from "./LoginAdmin";
// import Doctors from "./Doctors";
// import AdminPage from "./AdminPage";
// import useToken from "./useToken";

// function App() {
//   const { token, removeToken, setToken } = useToken();
//   const [userType, setUserType] = useState(null);
//   const history = useHistory();

//   useEffect(() => {
//     if (token && token.includes("admin")) {
//       setUserType("admin");
//     } else if (token) {
//       setUserType("doctor");
//     }
//   }, [token]);

//   const handleNavigate = (path) => {
//     history.push(path);
//   };

//   return (
//     <div className="vh-100 gradient-custom">
//       <div className="container">
//         <h1 className="page-header text-center">Welcome To OsteoSense!</h1>
//         <BrowserRouter>
//           {!token && token !== "" && token !== undefined ? (
//             <LoginDoctors setToken={setToken} />
//           ) : userType === "doctor" ? (
//             <>
//               <Routes>
//                 <Route
//                   path="/doctors"
//                   element={<Doctors token={token} setToken={setToken} />}
//                 />
//                 <Route
//                   path="/admin"
//                   element={() => {
//                     handleNavigate("/admin");
//                     return null;
//                   }}
//                 />
//               </Routes>
//             </>
//           ) : userType === "admin" ? (
//             <>
//               <Routes>
//                 <Route
//                   path="/admin"
//                   element={<AdminPage token={token} setToken={setToken} />}
//                 />
//                 <Route
//                   path="/doctors"
//                   element={() => {
//                     handleNavigate("/doctors");
//                     return null;
//                   }}
//                 />
//               </Routes>
//             </>
//           ) : null}
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// }

// export default App;
