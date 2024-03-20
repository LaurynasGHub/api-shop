const {
  updateProductValidation,
} = require('../validation/updateProductValidation');
const Product = require('../models/productModel');

async function updateProduct(id, updateDesc, data) {
  updateProductValidation(id, data);

  const response = await Product.findByIdAndUpdate(id, {
    description: updateDesc,
  });

  return response;
}

module.exports = updateProduct;
