const express = require('express');
const router = express.Router();
const controller = require('../controllers/director/directorsController');

router.get('/', controller.list);

router.get('/:id', controller.index);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;