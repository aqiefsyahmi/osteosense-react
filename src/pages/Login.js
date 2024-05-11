// // Home.js
// import React, { useState } from "react";
// import loginPageImage from "../image/loginpage.png";
// import axios from "axios";

// import { useNavigate } from "react-router-dom";

// export default function Login(props) {
//   const navigate = useNavigate();
//   const [loginFormAdmin, setloginFormAdmin] = useState({
//     email: "",
//     password: "",
//   });
//   const [loginForm, setloginForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     const { value, name } = event.target;
//     setloginForm((prevNote) => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   };

//   const handleChangeAdmin = (event) => {
//     const { value, name } = event.target;
//     setloginFormAdmin((prevNote) => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   };

//   const handleLoginAdmin = (event) => {
//     axios({
//       method: "POST",
//       url: "http://127.0.0.1:5000/logintokenadmin",
//       data: {
//         email: loginFormAdmin.email,
//         password: loginFormAdmin.password,
//       },
//     })
//       .then((response) => {
//         console.log(response);
//         props.setToken(response.data.access_token);
//         alert("Successfully Login");
//         localStorage.setItem("email", loginFormAdmin.email);
//         navigate("/admin");
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log(error.response);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//           if (error.response.status === 401) {
//             alert("Invalid credentials");
//           }
//         }
//       });
//     event.preventDefault();
//   };

//   const handleLoginDoctors = (event) => {
//     axios({
//       method: "POST",
//       url: "http://127.0.0.1:5000/logintoken",
//       data: {
//         email: loginForm.email,
//         password: loginForm.password,
//       },
//     })
//       .then((response) => {
//         console.log(response);
//         props.setToken(response.data.access_token);
//         alert("Successfully Login");
//         localStorage.setItem("email", loginForm.email);
//         navigate("/doctors");
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log(error.response);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//           if (error.response.status === 401) {
//             alert("Invalid credentials");
//           }
//         }
//       });
//     event.preventDefault();
//   };

//   return (
//     <div>
//       <div className="container h-50">
//         <div className="container-fluid h-custom">
//           <div className="row d-flex justify-content-center align-item-center h-50">
//             <div className="col-md-9 col-lg-6 col-xl-5">
//               <img
//                 src={loginPageImage}
//                 className="img-fluid"
//                 alt="Login Page"
//               />
//             </div>
//             <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//               <form>
//                 <div className="d-flex flex-row align-item-center justify-content-center justify-content-lg-start">
//                   <p className="lead fw-normal mb-0 me-3">Sign In User</p>
//                 </div>

//                 <div className="form-outline mb-4">
//                   <input
//                     type="email"
//                     value={loginForm.email}
//                     onChange={handleChange}
//                     text={loginForm.email}
//                     name="email"
//                     id="form3Example3"
//                     className="form-control form-control-lg"
//                     placeholder="Enter your Email"
//                   />
//                   <label className="form-label" for="form3Example3">
//                     Email address
//                   </label>
//                 </div>

//                 <div className="form-outline mb-3">
//                   <input
//                     type="password"
//                     value={loginForm.password}
//                     onChange={handleChange}
//                     text={loginForm.password}
//                     name="password"
//                     id="form3Example4"
//                     className="form-control form-control-lg"
//                     placeholder="Enter your Password"
//                   />
//                   <label className="form-label" for="form3Example4">
//                     Password
//                   </label>
//                 </div>

//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="form-check mb-0">
//                     <input
//                       type="checkbox"
//                       id="form2Example3"
//                       className="form-check-input me-2"
//                     />
//                     <label className="form-check-label" for="form2Example3">
//                       Remember me
//                     </label>
//                   </div>
//                   <a href="#!" className="text-body">
//                     Forgot password?
//                   </a>
//                 </div>

//                 <div className="text-center text-lg-start mt-4 pt-2">
//                   <button
//                     type="button"
//                     className="btn btn-primary btn-lg"
//                     onClick={handleLoginDoctors}
//                   >
//                     Login
//                   </button>
//                   {/* <p className="small fw-bold mt-2 pt-1 mb-0">
//                     Are you and admin?{" "}
//                     <a href="/" className="link-primary">
//                       Yes
//                     </a>
//                   </p> */}
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import loginPageImage from "../image/loginpage.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setloginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    const url = isAdmin
      ? "http://127.0.0.1:5000/logintokenadmin"
      : "http://127.0.0.1:5000/logintoken";
    const tokenKey = isAdmin ? "admin_token" : "doctor_token";

    axios({
      method: "POST",
      url: url,
      data: {
        email: loginForm.email,
        password: loginForm.password,
      },
    })
      .then((response) => {
        console.log(response);
        props.setToken(response.data[tokenKey]);
        alert("Successfully Login");
        localStorage.setItem("email", loginForm.email);
        navigate(isAdmin ? "/admin" : "/doctors");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        }
      });
    event.preventDefault();
  };

  return (
    <div>
      <div className="container h-50">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-item-center h-50">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src={loginPageImage}
                className="img-fluid"
                alt="Login Page"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-item-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">
                    {isAdmin ? "Sign In Admin" : "Sign In Doctor"}
                  </p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={handleChange}
                    name="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter your Email"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={handleChange}
                    name="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter your Password"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      type="checkbox"
                      id="form2Example3"
                      className="form-check-input me-2"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleLogin}
                  >
                    {isAdmin ? "Login Admin" : "Login Doctor"}
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    {isAdmin ? "Are you a doctor?" : "Are you an admin?"}
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => setIsAdmin(!isAdmin)}
                    >
                      Switch
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
