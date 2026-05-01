import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardPage from "../pages/DashboardPage";
import Layout from "../pages/Layout";
import Setting from "../pages/Setting";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />

        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/user/profile"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/user/dashboard"
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          }
        />

        <Route
          path="/user/setting"
          element={
            <Layout>
             <Setting/>
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;