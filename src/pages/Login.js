// // import React, { useState } from "react";
// // import loginPageImage from "../image/loginpage.png";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // export default function Login(props) {
// //   const navigate = useNavigate();
// //   const [loginForm, setloginForm] = useState({
// //     email: "",
// //     password: "",
// //   });
// //   const [isAdmin, setIsAdmin] = useState(false);

// //   const handleChange = (event) => {
// //     const { value, name } = event.target;
// //     setloginForm((prevNote) => ({
// //       ...prevNote,
// //       [name]: value,
// //     }));
// //   };

// //   const handleLogin = (event) => {
// //     const url = isAdmin
// //       ? "http://127.0.0.1:5000/logintokenadmin"
// //       : "http://127.0.0.1:5000/logintoken";
// //     const tokenKey = isAdmin ? "admin_token" : "doctor_token";

// //     axios({
// //       method: "POST",
// //       url: url,
// //       data: {
// //         email: loginForm.email,
// //         password: loginForm.password,
// //       },
// //     })
// //       .then((response) => {
// //         console.log(response);
// //         props.setToken(response.data[tokenKey]);
// //         alert("Successfully Login");
// //         localStorage.setItem("email", loginForm.email);
// //         navigate(isAdmin ? "/admin" : "/doctors");
// //       })
// //       .catch((error) => {
// //         if (error.response) {
// //           console.log(error.response);
// //           console.log(error.response.status);
// //           console.log(error.response.headers);
// //           if (error.response.status === 401) {
// //             alert("Invalid credentials");
// //           }
// //         }
// //       });
// //     event.preventDefault();
// //   };

// //   return (
// //     <div>
// //       <div className="container h-50">
// //         <div className="container-fluid h-custom">
// //           <div className="row d-flex justify-content-center align-item-center h-50">
// //             <div className="col-md-9 col-lg-6 col-xl-5">
// //               <img
// //                 src={loginPageImage}
// //                 className="img-fluid"
// //                 alt="Login Page"
// //               />
// //             </div>
// //             <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
// //               <form>
// //                 <div className="d-flex flex-row align-item-center justify-content-center justify-content-lg-start">
// //                   <h3>{isAdmin ? "Sign In Admin" : "Sign In Doctor"}</h3>
// //                 </div>

// //                 <div className="form-outline mb-4">
// //                   <input
// //                     type="email"
// //                     value={loginForm.email}
// //                     onChange={handleChange}
// //                     name="email"
// //                     id="form3Example3"
// //                     className="form-control form-control-lg"
// //                     placeholder="Enter your Email"
// //                   />
// //                   <label className="form-label" htmlFor="form3Example3">
// //                     Email address
// //                   </label>
// //                 </div>

// //                 <div className="form-outline mb-3">
// //                   <input
// //                     type="password"
// //                     value={loginForm.password}
// //                     onChange={handleChange}
// //                     name="password"
// //                     id="form3Example4"
// //                     className="form-control form-control-lg"
// //                     placeholder="Enter your Password"
// //                   />
// //                   <label className="form-label" htmlFor="form3Example4">
// //                     Password
// //                   </label>
// //                 </div>

// //                 {/* <div className="d-flex justify-content-between align-items-center">
// //                   <div className="form-check mb-0">
// //                     <input
// //                       type="checkbox"
// //                       id="form2Example3"
// //                       className="form-check-input me-2"
// //                     />
// //                     <label className="form-check-label" htmlFor="form2Example3">
// //                       Remember me
// //                     </label>
// //                   </div>
// //                   <a href="#!" className="text-body">
// //                     Forgot password?
// //                   </a>
// //                 </div> */}

// //                 <div className="text-center text-lg-start mt-4 pt-2">
// //                   <button
// //                     type="button"
// //                     className="btn btn-primary btn-lg"
// //                     onClick={handleLogin}
// //                   >
// //                     {isAdmin ? "Login Admin" : "Login Doctor"}
// //                   </button>
// //                   <p className="small fw-bold mt-2 pt-1 mb-0">
// //                     {isAdmin ? "Are you a doctor?" : "Are you an admin?"}
// //                     <button
// //                       type="button"
// //                       className="btn btn-link"
// //                       onClick={() => setIsAdmin(!isAdmin)}
// //                     >
// //                       Yes
// //                     </button>
// //                   </p>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import loginPageImage from "../image/loginpage.png";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login(props) {
//   const navigate = useNavigate();
//   const [loginForm, setloginForm] = useState({
//     email: "",
//     password: "",
//   });
//   const [isAdmin, setIsAdmin] = useState(false);

//   const handleChange = (event) => {
//     const { value, name } = event.target;
//     setloginForm((prevNote) => ({
//       ...prevNote,
//       [name]: value,
//     }));
//   };

//   const handleLogin = (event) => {
//     const url = isAdmin
//       ? "http://127.0.0.1:5000/logintokenadmin"
//       : "http://127.0.0.1:5000/logintoken";
//     const tokenKey = isAdmin ? "admin_token" : "doctor_token";

//     axios({
//       method: "POST",
//       url: url,
//       data: {
//         email: loginForm.email,
//         password: loginForm.password,
//       },
//     })
//       .then((response) => {
//         console.log(response);
//         props.setToken(response.data[tokenKey]);
//         alert("Successfully Login");
//         localStorage.setItem("email", loginForm.email);
//         navigate(isAdmin ? "/admin" : "/doctors");
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
//     <div className="h-screen grid md:grid-cols-2 sm:grid-cols-1">
//       <div className="content-center bg-[#FFFFFF] mt-5 mb-5">
//         <div className="grid place-content-center pb-[70px]">
//           <span className="text-[#4A00FF] text-4xl font-bold">
//             Welcome to{" "}
//             <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
//               OsteoSense!
//             </span>
//           </span>
//         </div>
//         <div>
//           <img
//             src={loginPageImage}
//             className="grid place-content-center w-[30rem] mx-auto img-fluid "
//             alt="Login Page"
//           />
//         </div>
//         <div className="grid place-content-center pt-[70px] mb-2">
//           <span className="text-[#4A00FF] font-normal text-sm ">
//             Copyright © 2024, OsteoSense Web Project. All rights reserved.
//           </span>
//         </div>
//       </div>

//       <div className=" bg-[#4A00FF] content-center ">
//         <div className="mt-5 mb-5">
//           <div className="grid place-content-center h-20">
//             <span className="text-base-100 text-4xl pb-5 fw-bold ">
//               {isAdmin ? "Sign In Admin" : "Sign In Doctor"}
//             </span>
//           </div>
//           <div className="mx-auto bg-[#FFFFFF] w-3/5 px-5 py-5 shadow-2xl rounded-[1.7rem]">
//             <form>
//               <div className="pb-2">
//                 <label
//                   className="form-label text-[#4A00FF] font-bold text-xl"
//                   htmlFor="form3Example3"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   value={loginForm.email}
//                   onChange={handleChange}
//                   name="email"
//                   id="form3Example3"
//                   className="form-control input input-bordered max-w-full input-lg"
//                   placeholder="example@gmail.com"
//                 />
//               </div>

//               <div className="pb-4">
//                 <label
//                   className="form-label text-[#4A00FF] font-bold text-xl"
//                   htmlFor="form3Example4"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   value={loginForm.password}
//                   onChange={handleChange}
//                   name="password"
//                   id="form3Example4"
//                   className="form-control input input-bordered max-w-full input-lg"
//                   placeholder="**********"
//                 />
//               </div>

//               <div>
//                 <button
//                   type="button"
//                   className="btn btn-primary btn-lg w-full rounded-xl"
//                   onClick={handleLogin}
//                 >
//                   {isAdmin ? "Sign in" : "Sign in"}
//                 </button>
//                 <div className="grid place-content-center pt-4">
//                   <button
//                     type="button"
//                     className="link link-secondary font-medium"
//                     onClick={() => setIsAdmin(!isAdmin)}
//                   >
//                     {isAdmin ? "Are you a doctor?" : "Are you an admin?"}
//                   </button>
//                 </div>
//               </div>
//             </form>
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

export default function Login({ setToken, handleLogin }) {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setLoginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (event) => {
    const url = isAdmin
      ? "http://127.0.0.1:5000/logintokenadmin"
      : "http://127.0.0.1:5000/logintoken";

    axios
      .post(url, {
        email: loginForm.email,
        password: loginForm.password,
      })
      .then((response) => {
        handleLogin(response, isAdmin);
        navigate(isAdmin ? "/admin" : "/doctors");
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert("Invalid credentials");
        }
      });

    event.preventDefault();
  };

  return (
    <div className="h-screen grid md:grid-cols-2 sm:grid-cols-1">
      <div className="content-center bg-[#FFFFFF] mt-5 mb-5">
        <div className="grid place-content-center pb-[70px]">
          <span className="text-[#4A00FF] text-4xl font-bold">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              OsteoSense!
            </span>
          </span>
        </div>
        <div>
          <img
            src={loginPageImage}
            className="grid place-content-center w-[30rem] mx-auto img-fluid"
            alt="Login Page"
          />
        </div>
        <div className="grid place-content-center pt-[70px] mb-2">
          <span className="text-[#4A00FF] font-normal text-sm">
            Copyright © 2024, OsteoSense Web Project. All rights reserved.
          </span>
        </div>
      </div>

      <div className="bg-[#4A00FF] content-center">
        <div className="mt-5 mb-5">
          <div className="grid place-content-center h-20">
            <span className="text-base-100 text-4xl pb-5 fw-bold">
              {isAdmin ? "Sign In Admin" : "Sign In Doctor"}
            </span>
          </div>
          <div className="mx-auto bg-[#FFFFFF] w-3/5 px-5 py-5 shadow-2xl rounded-[1.7rem]">
            <form onSubmit={handleLoginSubmit}>
              <div className="pb-2">
                <label
                  className="form-label text-[#4A00FF] font-bold text-xl"
                  htmlFor="form3Example3"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={handleChange}
                  name="email"
                  id="form3Example3"
                  className="form-control input input-bordered max-w-full input-lg"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="pb-4">
                <label
                  className="form-label text-[#4A00FF] font-bold text-xl"
                  htmlFor="form3Example4"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={handleChange}
                  name="password"
                  id="form3Example4"
                  className="form-control input input-bordered max-w-full input-lg"
                  placeholder="**********"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full rounded-xl"
                >
                  {isAdmin ? "Sign in" : "Sign in"}
                </button>
                <div className="grid place-content-center pt-4">
                  <button
                    type="button"
                    className="link link-secondary font-medium"
                    onClick={() => setIsAdmin(!isAdmin)}
                  >
                    {isAdmin ? "Are you a doctor?" : "Are you an admin?"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
