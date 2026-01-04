const router = require('express').Router();
const controlador = require('../controllers/user.controller');

router.get('/', controlador.getUsers).get('/:id', controlador.getUserById);
router.post('/', controlador.createUser).put('/:id', controlador.updateUser).delete('/:id', controlador.deleteUser);

module.exports = router;