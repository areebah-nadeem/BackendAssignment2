
const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
  name: {  type: String  }
});

const categories = mongoose.model('Categories', categorieSchema);

module.exports = categories;
