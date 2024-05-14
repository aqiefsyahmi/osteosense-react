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
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Doctors from "./pages/doctors/Doctors";
import Admin from "./pages/admin/Admin";
import ListUserPage from "./pages/ListUserPage";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import useToken from "./pages/useToken";
import Header from "./components/Header";

function App() {
  const { token, removeToken, setToken } = useToken();
  const [role, setRole] = useState("");

  const handleLogin = (response, isAdmin) => {
    const tokenKey = isAdmin ? "admin_token" : "doctor_token";
    setToken(response.data[tokenKey]);
    setRole(isAdmin ? "admin" : "doctor");
    alert("Successfully Login");
    localStorage.setItem("email", response.data.email);
  };

  return (
    <div className="vh-100 gradient-custom">
      <BrowserRouter>
        {!token && token !== "" && token !== undefined ? (
          <Login setToken={setToken} handleLogin={handleLogin} />
        ) : (
          <>
            <Header token={removeToken} role={role} />
            <Routes>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
