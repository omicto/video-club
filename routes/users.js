const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user/usersController');

// /users
router.get('/', usersController.list);

router.get('/:id', usersController.index);

router.post('/', usersController.create);

router.put('/:id', usersController.update);

router.delete('/:id', usersController.destroy);

module.exports = router;
