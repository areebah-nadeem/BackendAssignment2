const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');

// full data
router.route('/').get(productCtrl.getAllData);  //GET/////
router.route('/').post(productCtrl.createData)  //POST////
router.route('/').delete(productCtrl.removeAll);    //DELETE
// data with id
router.route('/:id').get(productCtrl.getDataById)   //GETBYID///
router.route('/:id').put(productCtrl.updateDataById)    //PUT ID /// 
router.route('/:id').delete(productCtrl.removeDataById);    //DELETEBYIT

router.get('/search/:name', productCtrl.listByName);      //FINDBYNAME

module.exports = router;
