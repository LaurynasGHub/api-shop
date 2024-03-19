const Product = require('../models/productModel.js');

async function getProductById(id) {
  const response = await Product.findById(id).exec();

  return response;
}

module.exports = getProductById;
