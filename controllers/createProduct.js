const {
  setAllProductsValidation,
} = require('../validation/setAllProductsValidation');

const Product = require('../models/productModel');

//POST/product
async function createProduct(props) {
  console.log(props);

  setAllProductsValidation(props);

  const response = await Product.create(props);

  return response;
}

module.exports = createProduct;
