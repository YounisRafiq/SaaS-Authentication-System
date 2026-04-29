const cloudniary = require("cloudinary").v2;
const fs = require("fs");

cloudniary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadfileToCloudinary = async (file) => {
  try {
    console.log(file);

    if (!file) return null;
    const response = await cloudniary.uploader.upload(file, {
      resource_type: "image",
    });

    fs.unlinkSync(file);

    return response;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    fs.unlinkSync(file);
    return null;
  }
};

module.exports = { uploadfileToCloudinary };
