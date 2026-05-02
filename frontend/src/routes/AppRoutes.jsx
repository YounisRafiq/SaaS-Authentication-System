import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardPage from "../pages/DashboardPage";
import Setting from "../pages/Setting";
import Navbar from "../pages/Navbar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />

        <Route path="/" element={<><Navbar/><Dashboard/></>} />
        <Route path="/user/profile" element={<><Navbar/><Dashboard/></>} />
        <Route path="/user/dashboard" element={<><Navbar/><DashboardPage/></>} />
        <Route path="/user/setting" element={<><Navbar/><Setting/></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
