import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className={`sidebar-overlay`} />

      <div className="dashboard-main">
        <div className={`content`}>
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
