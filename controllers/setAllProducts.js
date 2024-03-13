const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

async function setAllProducts(props) {
  console.log(props);

  const response = await Product.create({
    title: 'test',
    description: 'test',
  });

  return response;
}

module.exports = setAllProducts;
