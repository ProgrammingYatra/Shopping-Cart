const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    currencyId: {
      type: String,
      default: "INR",
      required: true,
      trim: true,
      enum: ["INR"],
    },
    currencyFormat: {
      type: String,
      default: "₹",
      required: true,
      trim: true,
      enum: ["₹"],
    },
    isFreeShipping: { type: Boolean, trim: true, default: false },
    productImage: { type: String, required: true, trim: true },
    style: { type: String },
    availableSizes: { type: [String], required: true, trim: true },
    installments: { type: Number },
    deletedAt: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
