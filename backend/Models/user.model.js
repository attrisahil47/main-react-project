const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
      unique: true, // Ensures no duplicate emails
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt & updatedAt fields
);

module.exports = model("User", userSchema, "users");
