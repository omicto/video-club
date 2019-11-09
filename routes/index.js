const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user/usersController');

/* GET home page. */
router.get('/', usersController.index);


module.exports = router;
