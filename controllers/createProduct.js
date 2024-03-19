const {
  setAllProductsValidation,
} = require('../validation/setAllProductsValidation');
//gaunam palei schema sukurta prdukta
const Product = require('../models/productModel');

//POST/product
async function createProduct(props) {
  console.log(props);

  setAllProductsValidation(props);
  //product turi ivairius metodus kaip create/find ir pan. mongoDB dokumentacijoj jie yra aprasyti
  const response = await Product.create(props);

  return response;
}

module.exports = createProduct;
