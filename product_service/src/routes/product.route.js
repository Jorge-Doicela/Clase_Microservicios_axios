const router = require('express').Router();
const controlador = require('../controllers/product.controller');

router.get('/', controlador.getProducts).get('/:id', controlador.getProductById);
router.post('/', controlador.createProduct).put('/:id', controlador.updateProduct).delete('/:id', controlador.deleteProduct);

module.exports = router;