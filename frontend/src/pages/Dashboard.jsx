import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-container">

      {/* Overlay only (sidebar removed) */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
        onClick={closeSidebar}
      />

      {/* Main Content */}
      <div className="dashboard-main">

        {/* Navbar */}
        <div className="navbar">

          <div className="menu-toggle" onClick={toggleSidebar}>
            ☰
          </div>

          <div className="user">
            <div className="user-info">
              <span className="user-name">Younis</span>
              <span className="user-role">Administrator</span>
            </div>

            <img src="https://i.pravatar.cc/40" alt="user" />
          </div>

        </div>

        {/* Content */}
        <div className="content">
          <h1>Dashboard</h1>

          <div className="card welcome">
            <h2>Welcome, Younis 👋</h2>
            <p>Here's what's happening with your account today.</p>
          </div>

          <div className="stats">
            <div className="card">
              <div className="stats-icon">🔐</div>
              <h4>Total Logins</h4>
              <h2>24</h2>
              <i className="ri-add-fill"></i>
            </div>

            <div className="card">
              <div className="stats-icon">⏰</div>
              <h4>Last Login</h4>
              <h2>2 Hours Ago</h2>
              <i className="ri-calendar-line"></i>
            </div>

            <div className="card">
              <div className="stats-icon">✅</div>
              <h4>Account Status</h4>
              <h2 className="active-status">Active</h2>
              <i className="ri-check-fill tick"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;