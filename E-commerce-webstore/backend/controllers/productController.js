const Product = require("../models/productModel");

// create product- admin

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// get all - admin
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ success: true, products });
};

// update - admin

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(200)
      .json({ success: false, message: "Product not found" });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    userFindAndModify: false,
  });

  res.status(200).json({ success: true, product });
};

// delete - admin

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id.trim();

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });
    }

    await Product.deleteOne({ _id: productId });

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
