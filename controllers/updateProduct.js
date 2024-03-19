const Product = require('../models/productModel');

async function updateProduct(id, updateDesc) {
  const response = await Product.findByIdAndUpdate(id, {
    description: updateDesc,
  });

  return response;
}

module.exports = updateProduct;
