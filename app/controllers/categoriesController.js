
const data = require('../models/categoriesModel');

//CRUD
//Creating new data 
const addData = async function (req, res, next) {
  const { name } = req.body;
  const category = new data({ name }); //putting data in schema

  try {

    res.status(200).json(await category.save());
  } catch (err) {
    res.status(400).json({ err: 'Error: Cannot create new data' + err.message });
  }
};

//READ DATA
    //BY ID
const getDataById = async function (req, res, next) {
  try {

    res.json(await data.findById(req.params.id));
    
    console.log("get all data by id it is working")
  } catch (error) {
    res.status(400).json({ error: 'Error: Data not found by id' + error.message});
  }
};
  //ALL
const getAllData = async function(req, res, next) {
  try {

    res.json(await data.find());
    console.log("success: get all data it is working");
  } catch (error) {
    res.status(400).json({ error: 'Error: Data not found' +error.message });
  }
};


const removeDataById = async function (req, res, next) {
  try {
    await data.findByIdAndRemove(req.params.id);
    res.json({ message: 
      "Success: The categories entry is removed successfully" 
    });
    console.log("success: Remove all data it is working");
  } catch (error) {
    res.status(400).json({ error:'Error: Cannot remove data by Id' +error.message });
  }
};


const updateDataById = async function (req, res, next) {
  try {
    res.json(await data.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    console.log("success: data updated by id");
  } catch (error) {
    res.status(400).json({ error: 'Error: Cannot update data by id' + error.message });
  }
};


const listByName = async function (req, res, next)  {

  const {name} = req.params;
  //const { name } = req.params;
  try {
  
    const newname=await data.find({ name: { $regex: name, $options: 'i' } });
    res.json(newname);
  } catch (error) {
    res.status(404).json({ error:'Error: Cannot list data by name' + error.message });
  }
};

const removeAll= async function (req,res,next){
  try
  { await data.deleteMany();
res.json({message:"Done : Removed All data in Categories Successfully"})

  }
  catch(error){

res.status(404).json({error: 'Cannot Delete data'});
  }
};

// await productData.deleteMany({});
// res.json({ message: 'Done: Removed successfully' });
// } catch (error) {
// res.status(404).json({ error: 'Error: Cannot remove all data' + error.message });
// }

// const listByName = async function (req, res, next) {
//   const { name } = req.params; // Get the value of :name from the route parameter
//   try {
//     // Use the value of `name` in your database query without casting to ObjectId
//     const result = await categories.find({ name: { $regex: name, $options: 'i' } });

//     if (result.length === 0) {
//       res.status(404).json({ error: 'No matching data found' });
//     } else {
//       res.json(result);
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error: Cannot list data by name ' + error.message });
//   }
// };


module.exports = 
{   getAllData,     addData,      getDataById,    updateDataById,   removeDataById,   removeAll,    listByName   };
