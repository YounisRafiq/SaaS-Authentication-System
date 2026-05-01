import React from "react";
import "./Setting.css";

const Setting = ({sidebarOpen}) => {
  return (
    <div className={`settings ${sidebarOpen ? "setting-shrink" : ""}`}>

      <div className="settings-header">
        <div>
          <h2>Settings</h2>
          <p>Manage your account settings and preferences</p>
        </div>
      </div>

      <div className="settings-grid">

        <div className="setting-left">

          <div className="setting-card">
            <h3>Profile Settings</h3>

            <div className="profile">
              <img src="https://i.pravatar.cc/100" alt="" />

              <div className="form-grid">
                <input placeholder="Full Name" />
                <input placeholder="Username" />
                <input placeholder="Email" />
                <input placeholder="Phone Number" />
              </div>
            </div>

            <textarea placeholder="Bio"></textarea>

            <button className="btn primary">Save Changes</button>
          </div>

          <div className="setting-card">
            <h3>Change Password</h3>

            <input placeholder="Current Password" />
            <div className="row">
              <input placeholder="New Password" />
              <input placeholder="Confirm Password" />
            </div>

            <button className="btn primary">Update Password</button>
          </div>

          <div className="bottom-grid">

            <div className="setting-card small">
              <h4>Notifications</h4>

              <div className="toggle">
                <span>Email Notifications</span>
                <input type="checkbox" />
              </div>

              <div className="toggle">
                <span>Push Notifications</span>
                <input type="checkbox" />
              </div>

              <div className="toggle">
                <span>Marketing Emails</span>
                <input type="checkbox" />
              </div>
            </div>

            <div className="setting-card small">
              <h4>Appearance</h4>

              <select>
                <option>Light</option>
                <option>Dark</option>
              </select>

              <div className="colors">
                <span className="color blue"></span>
                <span className="color setting-green"></span>
                <span className="color orange"></span>
                <span className="color red"></span>
              </div>
            </div>

            <div className="setting-card small">
              <h4>General</h4>

              <select>
                <option>English</option>
              </select>

              <select>
                <option>Pakistan</option>
              </select>
            </div>

          </div>

          <div className="danger">
            <p>Once you delete your account, there is no going back.</p>
            <div>
              <button className="btn danger-outline">Deactivate</button>
              <button className="btn danger">Delete</button>
            </div>
          </div>

        </div>

        <div className="setting-right">

          <div className="setting-card">
            <h4>Current Plan</h4>
            <h2>$19/month</h2>
            <p>Next billing date: 15 June</p>

            <ul>
              <li>Unlimited Projects</li>
              <li>Team Collaboration</li>
              <li>Analytics</li>
            </ul>

            <button className="btn">Manage Subscription</button>
          </div>

          <div className="setting-card">
            <h4>Security</h4>

            <div className="toggle">
              <span>Two-Factor Authentication</span>
              <input type="checkbox" />
            </div>

            <div className="link">Active Sessions</div>
            <div className="link">Login History</div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Setting;