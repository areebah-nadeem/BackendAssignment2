const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:        { type: String },
  description: { type: String },
  price:       { type: Number },
  quantity:    { type: Number },
  category:    { type: String }
});

const products = mongoose.model('Products', productSchema);

module.exports = products;


