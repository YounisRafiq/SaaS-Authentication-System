const userModel = require("../models/user.model");

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user?._id;

    const user = await userModel.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    const response = {
      _id: user._id,
      email: user.email,
      role: user.role,
      file: user.file,
    };

    res.status(200).json({
      success: true,
      message: "User Profile Fetched SuccessFully",
      response: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};

module.exports = { getUserProfile };
