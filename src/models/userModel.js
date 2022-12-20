const mongoose = require("mongoose");
const validator=require("validator")

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please Provide a First Name"],
      trim: true,
    },
    lname: {
      type: String,
      required: [true, "Please Provide a Last Name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please Provide a Last Name"],
      trim: true,
      unique: true,
      validate:[validator.isEmail,"Please Provide a Unique Email"]
    },
    profileImage: {
      type: String,
      required: [true, "Please Provide Profile Image"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Please Provide Phone No"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please Provide a Password"],
      trim: true,
    },
    address: {
      shipping: {
        street: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        pincode: { type: Number, required: true, trim: true },
      },
      billing: {
        street: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        pincode: { type: Number, required: true, trim: true },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema); //users
