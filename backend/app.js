const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const authRoutes = require("./src/routes/auth.routes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth" , authRoutes);

module.exports = app;
