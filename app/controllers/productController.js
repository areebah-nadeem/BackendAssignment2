const productData = require('../models/productModel');


const getAllData = async function (req, res, next)  {
  try {
    res.json(await productData.find({}));
  } catch (err) {
    res.status(404).json({ err: 'Error: Cannot get all data' });
  }
};

const getDataById = async function(req, res, next) {
  try {
    res.json (await productData.findById(req.params.id));
  } catch (error) {
    res.status(404).json({ error: 'Product not found' + error.message });
  }
};

const createData = async function (req, res, next) {
  try {
    const newProduct = await new productData(req.body).save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(404).json({ error: 'Error: Cannot create data' + error.message });
  }
};

const updateDataById =async function (req, res, next) {
  try {
    
    res.json(await productData.findByIdAndUpdate(req.params.id, req.body, { new: true }));
  } catch (error) {
    res.status(404).json({ error: 'Error: Cannot update data by Id'  + error.message });
  }
};

const removeDataById = async function (req, res, next) {
  try {
    await productData.findByIdAndRemove(req.params.id);
    res.json({ message: 'Done:Removed successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Error: Cannot remove data by id.'  + error.message });
  }
};
const removeAll = async function(req, res, next) {
  try {
    await productData.deleteMany();
    res.json({ message: 'Done: Removed successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Error: Cannot remove all data' + error.message });
  }
};

const listByName = async function (req, res, next)  {
  const { name } = req.params;
  try {
    res.json(await productData.find({ name: { $regex: name, $options: 'i' } }));
  } catch (error) {
    res.status(404).json({ error:'Error: Cannot list data by name' + error.message });
  }
};

module.exports = {
  getAllData,
  getDataById,
  createData,
  updateDataById,
  removeDataById,
  removeAll,
  listByName

};