const router = require("express").Router();
const Product = require("../model/productModel");

router.post("/product/post", async (req, res) => {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (err) {
    res.status(400).send("This is The Error", err);
  }
});

module.exports = router;
