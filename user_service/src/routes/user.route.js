const router = require('express').Router();
const usersController = require('../controllers/user.controller');

router.get('/', usersController.getUsers).get('/:id', usersController.getUserById);
router.post('/', usersController.createUser).put('/:id', usersController.updateUser).delete('/:id', usersController.deleteUser);

module.exports = router;