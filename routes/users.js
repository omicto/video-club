const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user/usersController');

/* GET home page. */
router.get('/', usersController.list);
router.get('/:id', usersController.one);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.remove);

module.exports = router;

