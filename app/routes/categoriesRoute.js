

const express = require('express');
const controllerCtrl = require('../controllers/categoriesController');

const router = express.Router();


// full data
router.get('/', controllerCtrl.getAllData);
router.post('/', controllerCtrl.addData);
router.delete('/', controllerCtrl.removeAll)
//data by id
router.get('/:id', controllerCtrl.getDataById);
router.put('/:id', controllerCtrl.updateDataById);
router.delete('/:id', controllerCtrl.removeDataById);

router.get('/search/:name', controllerCtrl.listByName);

module.exports = router;
