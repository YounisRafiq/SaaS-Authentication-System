import React from "react";
import "./DashboardPage.css";
const DashboardPage = () => {
  return (
    <div className={`dashboard-page`}>
      <h1>Dashboard Overview</h1>
      <p className="subtitle">Your account summary and activity</p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <p>Total Logins</p>
          <h2>24</h2>
          <span className="green">+12% from last week</span>
        </div>

        <div className="dashboard-card">
          <p>Last Login</p>
          <h2>2 Hours Ago</h2>
          <span>24 May 2024, 10:30 AM</span>
        </div>

        <div className="dashboard-card">
          <p>Account Status</p>
          <h2 className="green">Active</h2>
          <span>Your account is active</span>
        </div>
      </div>

      <div className="bottom">
        <div className="dashboard-card activity">
          <h3 className="recent">Recent Activity</h3>

          <div className="activity-item">
            <span>🕒</span>
            <div>
              <p>Logged in</p>
              <small>24 May 2024, 10:30 AM</small>
            </div>
          </div>

          <div className="activity-item">
            <span>👤</span>
            <div>
              <p>Profile updated</p>
              <small>23 May 2024, 04:15 PM</small>
            </div>
          </div>

          <div className="activity-item">
            <span>🔒</span>
            <div>
              <p>Password changed</p>
              <small>22 May 2024, 11:30 AM</small>
            </div>
          </div>
        </div>

        <div className="dashboard-card actions">
          <h3>Quick Actions</h3>

          <button className="action-btn">👤 Update Profile</button>
          <button className="action-btn">🔒 Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
