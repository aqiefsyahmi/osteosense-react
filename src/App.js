// import React from "react";
// import "./App.css";

// // Importing components from react-router-dom for routing
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Importing custom components for different pages
// // import Login from "./pages/LoginAdmin";
// import Login from "./pages/Login";
// import Doctors from "./pages/doctors/Doctors";
// import Admin from "./pages/admin/Admin";
// import ListUserPage from "./pages/ListUserPage";
// import CreateUser from "./pages/CreateUser";
// import EditUser from "./pages/EditUser";
// import useToken from "./pages/useToken";
// import Header from "./components/Header";

// function App() {
//   const { token, removeToken, setToken } = useToken();

//   return (
//     <div className="vh-100 gradient-custom">
//       {/* Page header */}

//       {/* BrowserRouter component to define routes */}
//       <BrowserRouter>
//         {!token && token !== "" && token !== undefined ? (
//           <Login setToken={setToken} />
//         ) : (
//           <>
//             <Header token={removeToken} />
//             <Routes>
//               <Route
//                 path="/doctors"
//                 element={<Doctors token={token} setToken={setToken} />}
//               />

//               <Route
//                 path="/admin"
//                 element={<Admin token={token} setToken={setToken} />}
//               />

//               <Route path="/test" element={<ListUserPage />} />

//               <Route path="/addnewuser" element={<CreateUser />} />

//               <Route path="/user/:id/edit" element={<EditUser />} />
//             </Routes>
//           </>
//         )}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Doctors from "./pages/doctors/Doctors";
// import Admin from "./pages/admin/Admin";
// import ListUserPage from "./pages/ListUserPage";
// import CreateUser from "./pages/CreateUser";
// import EditUser from "./pages/EditUser";
// import useToken from "./pages/useToken";
// import AdminHeader from "./components/AdminHeader";

// function App() {
//   const { token, removeToken, setToken } = useToken();
//   const [role, setRole] = useState("");

//   const handleLogin = (response, isAdmin) => {
//     const tokenKey = isAdmin ? "admin_token" : "doctor_token";
//     setToken(response.data[tokenKey]);
//     setRole(isAdmin ? "admin" : "doctor");
//     alert("Successfully Logged in");
//     localStorage.setItem("email", response.data.email);
//   };

//   return (
//     <div className="vh-100 gradient-custom">
//       <BrowserRouter>
//         {!token && token !== "" && token !== undefined ? (
//           <Login setToken={setToken} handleLogin={handleLogin} />
//         ) : (
//           <>
//             <AdminHeader removeToken={removeToken} />
//             <Routes>
//               <Route
//                 path="/doctors"
//                 element={
//                   <Doctors
//                     token={token}
//                     setToken={setToken}
//                     removeToken={removeToken}
//                   />
//                 }
//               />

//               <Route
//                 path="/admin"
//                 element={
//                   <Admin
//                     token={token}
//                     setToken={setToken}
//                     removeToken={removeToken}
//                   />
//                 }
//               />

//               <Route path="/test" element={<ListUserPage />} />

//               <Route path="/addnewuser" element={<CreateUser />} />

//               <Route path="/user/:id/edit" element={<EditUser />} />
//             </Routes>
//           </>
//         )}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Doctors from "./pages/doctors/Doctors";
// import ListUserPage from "./pages/ListUserPage";
// import CreateUser from "./pages/CreateUser";
// import EditUser from "./pages/EditUser";
// import useToken from "./pages/useToken";
// import AdminHeader from "./components/AdminHeader";
// import DoctorsHeader from "./components/DoctorsHeader";

// function App() {
//   const { token, removeToken, setToken } = useToken();
//   const [role, setRole] = useState("");

//   const handleLogin = (response, isAdmin) => {
//     const tokenKey = isAdmin ? "admin_token" : "doctor_token";
//     setToken(response.data[tokenKey]);
//     setRole(isAdmin ? "admin" : "doctor");
//     alert("Successfully Login");
//     localStorage.setItem("email", response.data.email);
//   };

//   return (
//     <div className="vh-100 gradient-custom">
//       <BrowserRouter>
//         {!token && token !== "" && token !== undefined ? (
//           <Login setToken={setToken} handleLogin={handleLogin} />
//         ) : (
//           <>
//             {role === "admin" ? (
//               <AdminHeader removeToken={removeToken} />
//             ) : (
//               <DoctorsHeader removeToken={removeToken} />
//             )}

//             <Routes>
//               <Route
//                 path="/doctors"
//                 element={<Doctors token={token} setToken={setToken} />}
//               />

//               <Route path="/test" element={<ListUserPage />} />

//               <Route path="/addnewuser" element={<CreateUser />} />

//               <Route path="/user/:id/edit" element={<EditUser />} />
//             </Routes>
//           </>
//         )}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Doctors from "./pages/doctors/Doctors";
import Admin from "./pages/admin/Admin";
import ManageProfileAdmin from "./pages/admin/ManageProfileAdmin";
import ListUserPage from "./pages/ListUserPage";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import useToken from "./pages/useToken";
import AdminHeader from "./components/AdminHeader";
import DoctorsHeader from "./components/DoctorsHeader";
import ProtectedRouteAdmin from "./router/ProtectedRouteAdmin";
import ProtectedRouteDoctors from "./router/ProtectedRouteDoctors";
import UnauthorizedPage from "./pages/UnauthorizedPage";

function App() {
  const { token, removeToken, setToken } = useToken();
  const [role, setRole] = useState("");

  const handleLogin = (response, isAdmin) => {
    const tokenKey = isAdmin ? "admin_token" : "doctor_token";
    setToken(response.data[tokenKey]);
    setRole(isAdmin ? "admin" : "doctor");
    alert("Successfully Login");
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("role", isAdmin ? "admin" : "doctor");
  };

  return (
    <div className="vh-100 gradient-custom">
      <Router>
        {!token && token !== "" && token !== undefined ? (
          <Login setToken={setToken} handleLogin={handleLogin} />
        ) : (
          <>
            <Routes>
              <Route element={<ProtectedRouteAdmin />}>
                <Route element={<AdminHeader removeToken={removeToken} />}>
                  <Route path="/admin" element={<Admin />} exact />

                  <Route
                    path="/manageprofileadmin"
                    element={<ManageProfileAdmin />}
                    exact
                  />

                  <Route path="/test" element={<ListUserPage />} />

                  <Route path="/addnewuser" element={<CreateUser />} />

                  <Route path="/user/:id/edit" element={<EditUser />} />
                </Route>
              </Route>
              <Route element={<ProtectedRouteDoctors />}>
                <Route element={<DoctorsHeader removeToken={removeToken} />}>
                  <Route path="/doctors" element={<Doctors />} exact />
                </Route>
                <Route
                  path="/unauthorizedpage"
                  element={<UnauthorizedPage />}
                />
              </Route>
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
