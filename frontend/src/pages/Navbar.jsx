import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  
  

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("profile");

  const openSidebar = () => {
    setSidebarOpen(true);
  };


  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleClick = (name) => {
    setActiveLink(name);
    closeSidebar();
  };

 

  return (
    <>
      <div className="navbar">
        <div className="menu-toggle" onClick={openSidebar}>
          <i className="ri-menu-2-line"></i>
        </div>

        <div className="user">
          <div className="user-info">
            <span className="user-name">Younis</span>
            <span className="user-role">Administrator</span>
          </div>
          <img src="https://i.pravatar.cc/40" alt="user" />
        </div>
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <div className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            ⚡ SaaSApp
            <i onClick={closeSidebar} class="ri-close-large-fill"></i>
          </div>
        </div>

        <ul  className="menu">
          <li className={activeLink === "profile" ? "active" : ""}>
            <span className="menu-icon">📊</span>
            <Link
              to="/user/profile"
              className="all-span"
              onClick={() => handleClick("profile")}
            >
              Profile
            </Link>
          </li>

          <li className={activeLink === "dashboard" ? "active" : ""}>
            <span className="menu-icon">👤</span>
            <Link
              to="/user/dashboard"
              className="all-span"
              onClick={() => handleClick("dashboard")}
            >
              Dashboard
            </Link>
          </li>

          <li className={activeLink === "settings" ? "active" : ""}>
            <span className="menu-icon">⚙️</span>
            <Link
              to="/user/setting"
              className="all-span"
              onClick={() => handleClick("settings")}
            >
              Settings
            </Link>
          </li>

          <li className={activeLink === "logout" ? "active" : ""}>
            <span className="menu-icon">🚪</span>
            <Link className="all-span" onClick={() => handleClick("logout")}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
