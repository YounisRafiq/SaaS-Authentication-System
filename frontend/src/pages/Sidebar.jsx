import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("profile");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
      <div className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <div className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="sidebar-header">
          <div className="logo">
            ⚡ SaaSApp
          </div>
        </div>

        <ul className="menu">

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

          {/* DASHBOARD */}
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

          {/* SETTINGS */}
          <li className={activeLink === "settings" ? "active" : ""}>
            <span className="menu-icon">⚙️</span>
            <Link to={"/user/setting"}
              className="all-span"
              onClick={() => handleClick("settings")}
            >
              Settings
            </Link>
          </li>

          {/* LOGOUT */}
          <li className={activeLink === "logout" ? "active" : ""}>
            <span className="menu-icon">🚪</span>
            <Link
              className="all-span"
              onClick={() => handleClick("logout")}
            >
              Logout
            </Link>
          </li>

        </ul>

      </div>
    </>
  );
};

export default Sidebar;