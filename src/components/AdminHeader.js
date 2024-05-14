import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import adminicon from "../image/adminicon.png";

export default function AdminHeader(props) {
  const navigate = useNavigate();

  const logMeOut = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/logoutadmin",
    })
      .then((response) => {
        props.token();
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
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Test</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
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
                <img alt="Tailwind CSS Navbar component" src={adminicon} />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border divide-y"
          >
            <div class="px-2 py-1">
              <span class="block text-sm">Bonnie Green</span>
              <span class="block text-sm  text-gray-500 truncate dark:text-gray-400 pb-2">
                name@flowbite.com
              </span>
            </div>
            <div>
              <div className="text-primary">
                <li class="pt-2 py-1">
                  <button>Profile</button>
                </li>
                <li class="py-1">
                  <button>Settings</button>
                </li>
              </div>
              <li class="py-1">
                <button
                  type="submit"
                  className="btn btn-outline btn-sm btn-error"
                  onClick={logMeOut}
                >
                  Logout
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

//TESSSSSSSSSSSSSSSSSSSTTTT

// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import adminicon from "../image/adminicon.png";

// export default function AdminHeader(props) {
//   const navigate = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const logMeOut = () => {
//     axios({
//       method: "POST",
//       url: "http://127.0.0.1:5000/logoutadmin",
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

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex">
//       {isSidebarOpen && (
//         <div className="w-56 bg-gray-800 text-white">
//           <div className="p-4">
//             <h1 class="text-2xl font-semibold">Sidebar</h1>
//             <ul class="mt-4">
//               <li class="mb-2">
//                 <a href="#" class="block hover:text-indigo-400">
//                   Home
//                 </a>
//               </li>
//               <li class="mb-2">
//                 <a href="#" class="block hover:text-indigo-400">
//                   About
//                 </a>
//               </li>
//               <li class="mb-2">
//                 <a href="#" class="block hover:text-indigo-400">
//                   Services
//                 </a>
//               </li>
//               <li class="mb-2">
//                 <a href="#" class="block hover:text-indigo-400">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//       <div className="flex flex-col flex-1 min-h-screen">
//         <div className="navbar bg-[#4A00FF]">
//           <div className="flex-none">
//             <button
//               className="btn btn-square btn-ghost"
//               onClick={toggleSidebar}
//             >
//               <div className="dropdown">
//                 <div tabIndex={0} role="button" className="btn btn-ghost">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="white"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h8m-8 6h16"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </button>
//           </div>
//           {!isSidebarOpen && (
//             <div className="flex-1">
//               <button className="btn btn-ghost text-white text-lg">
//                 OsteoSense
//               </button>
//             </div>
//           )}
//           <div className="flex-none">
//             <div className="dropdown dropdown-end">
//               <div tabIndex={0} role="button" className="btn btn-circle avatar">
//                 <div className="avatar online">
//                   <div className="w-10 rounded-full">
//                     <img alt="Tailwind CSS Navbar component" src={adminicon} />
//                   </div>
//                 </div>
//               </div>
//               <ul className="mt-3 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border divide-y">
//                 <div class="px-2 py-1">
//                   <span class="block text-sm">Bonnie Green</span>
//                   <span class="block text-sm  text-gray-500 truncate dark:text-gray-400 pb-2">
//                     name@flowbite.com
//                   </span>
//                 </div>
//                 <div>
//                   <div className="text-primary">
//                     <li class="pt-2 py-1">
//                       <button>Profile</button>
//                     </li>
//                     <li class="py-1">
//                       <button>Settings</button>
//                     </li>
//                   </div>
//                   <li class="py-1">
//                     <button
//                       type="submit"
//                       className="btn btn-outline btn-sm btn-error"
//                       onClick={logMeOut}
//                     >
//                       Logout
//                     </button>
//                   </li>
//                 </div>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex-1 overflow-auto p-4">{/* <AdminPage /> */}</div>
//       </div>
//     </div>
//   );
// }
