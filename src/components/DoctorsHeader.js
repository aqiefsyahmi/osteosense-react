// import axios from "axios";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import doctoricon from "../image/doctoricon.png";

// export default function DoctorsHeader(props) {
//   const navigate = useNavigate();

//   const logMeOut = () => {
//     axios({
//       method: "POST",
//       url: "http://127.0.0.1:5000/logout",
//     })
//       .then((response) => {
//         props.token();
//         localStorage.removeItem("email");
//         navigate("/");
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log(error.response);
//           console.log(error.response.status);
//           console.log(error.response.headers);
//         }
//       });
//   };

//   return (
//     <div className="navbar bg-[#4A00FF]">
//       <div className="flex-none">
//         <button className="btn btn-square btn-ghost">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="24px"
//             viewBox="0 -960 960 960"
//             width="24px"
//             fill="#FFFFFF"
//           >
//             <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
//           </svg>
//         </button>
//       </div>
//       <div className="flex-1">
//         <button className="btn btn-ghost text-white text-lg">OsteoSense</button>
//       </div>
//       <div className="flex-none">
//         <div className="dropdown dropdown-end">
//           <div tabIndex={0} role="button" className="btn btn-circle avatar">
//             <div className="avatar online">
//               <div className="w-10 rounded-full">
//                 <img alt="Tailwind CSS Navbar component" src={doctoricon} />
//               </div>
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="mt-3 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border"
//           >
//             <li>
//               <button>Profile</button>
//             </li>
//             <li>
//               <button>Settings</button>
//             </li>
//             <li>
//               <button
//                 type="submit"
//                 className="btn btn-outline btn-sm btn-error"
//                 onClick={logMeOut}
//               >
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import doctoricon from "../image/doctoricon.png";

export default function DoctorsHeader(props) {
  const navigate = useNavigate();

  const logMeOut = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/logout",
    })
      .then((response) => {
        props.removeToken();
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
    <div className="navbar bg-[#4A00FF]">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <button className="btn btn-ghost text-white text-lg">OsteoSense</button>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle avatar">
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={doctoricon} />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border"
          >
            <li>
              <button>Profile</button>
            </li>
            <li>
              <button>Settings</button>
            </li>
            <li>
              <button
                type="submit"
                className="btn btn-outline btn-sm btn-error"
                onClick={logMeOut}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
