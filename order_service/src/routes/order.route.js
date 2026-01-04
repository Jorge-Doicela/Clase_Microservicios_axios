const router = require('express').Router();
const controlador = require('../controllers/order.controller');

router.get('/', controlador.getOrders).get('/:id', controlador.getOrderById);
router.post('/', controlador.createOrder).put('/:id', controlador.updateOrder).delete('/:id', controlador.deleteOrder);

module.exports = router;