const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller")
const upload = require('../middleware/multer.middleware');

router.post("/user/register", upload.single("file") ,  authController.registerUser);
router.post("/user/login" , authController.loginUser);
router.get("/user/logout" , authController.logoutUser)

module.exports = router;