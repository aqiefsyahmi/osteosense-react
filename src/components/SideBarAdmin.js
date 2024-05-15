import React from "react";

export default function SideBarAdmin() {
  return (
    <div className="w-56 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Sidebar</h1>
        <ul className="mt-4">
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              About
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              Services
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
