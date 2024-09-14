import React from "react";
import {  NavLink } from "react-router-dom";
import SignIn from "./Signin";

import "../styles/Header.css";
import SupaSignIn from "../supabaseAuth/SupaSignIn";
const Header = () => {
  const navbarOptions = ["Home", "About", "Courses", "Profile", "Comment","Live"];

  return (
    <div className="header z-auto">
      {navbarOptions.map((opt, i) => (
        <div key={opt}>
          <NavLink
          key={opt}
            to={opt}
            className={({ isActive }) => (isActive ? "bg-green-600" : "inactive")}
          >
            {opt}
          </NavLink>
        </div>
      ))}

      {/* <SignIn /> */}
      <SupaSignIn/>
    </div>
  );
};

export default Header;
