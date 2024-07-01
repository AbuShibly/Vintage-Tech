const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
    enum: ["computers", "gamingconsoles", "audioplayers", "cameras", "phones"],
  },
  productQuantity: {
    type: String,
    required: true,
  },
});

const product = mongoose.model("Product", productSchema);

module.exports = product;
