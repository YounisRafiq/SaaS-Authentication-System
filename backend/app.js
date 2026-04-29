const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const authRoutes = require("./src/routes/auth.routes");
const userRoutes = require("./src/routes/user.routes");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5173"
}))
app.use("/api/v1/auth" , authRoutes);
app.use("/api/v1/user" , userRoutes);

module.exports = app;
