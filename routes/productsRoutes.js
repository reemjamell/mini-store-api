const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

router.route('/')
  .get(productsController.getAllProducts)
  .post(productsController.createProduct);

router.route('/:id')
  .get(productsController.getProductById)
  .put(productsController.updateProduct)
  .delete(productsController.deleteProduct);

module.exports = router;
