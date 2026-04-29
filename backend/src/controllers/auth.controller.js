const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const storageService = require("../services/service.cloudinary");

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (
      !fullName ||
      fullName === "" ||
      !email ||
      email === "" ||
      !password ||
      password === ""
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const file = await storageService.uploadfileToCloudinary(req.file?.path);
    console.log("File" , file);

    const user = await userModel.create({
      fullName,
      email,
      password: hashedPassword,
      role,
      file : file.secure_url
    });
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);

    if (!token) {
      return res.status(500).json({
        success: false,
        message: "InValid Token | failed to generate token",
      });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);

    if (!token) {
      return res.status(500).json({
        success: false,
        message: "InValid Token | failed to generate token",
      });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "User LoggedIn Successfully",
      loggedInUser: {
        _id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const logoutUser = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Please Login First",
    });
  }

  res.clearCookie("token", token);
  res.status(200).json({
    success: true,
    message: "User LoggedOut SuccessFully",
  });
};

module.exports = { registerUser, loginUser, logoutUser };
