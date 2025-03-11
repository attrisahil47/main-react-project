const {message} = require("antd");
const User = require("../../Models/user.model");
const { loginValidation } = require("../../Services/validation_schema");

const login = async (req, res, next) => {
  try {
    console.log("Request Body:", req.body); // 👈 Log the request body

    const loginValues = await loginValidation.validateAsync(req.body);
    console.log("Validated Data:", loginValues); // 👈 Log validated data

    const { emailAddress, password } = loginValues;

    const existingUser = await User.findOne({ emailAddress });

    if (!existingUser) {
      return res.status(400).json({ success: false, message: "User not found. Please sign up." });
    }

    if (password !== existingUser.password) {
      return res.status(400).json({ success: false, message: "Invalid email or password." });
    }

    res.status(200).json({ success: true, message: "Login successful!" });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(400).json({ success: false, message: "Invalid request!", error: error.message });
  }
};

module.exports = login;
