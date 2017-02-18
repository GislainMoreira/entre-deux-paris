const router = require('express').Router();
const controller = require('../../controllers/dresses');

router.get('/', controller.getDressesTops);

module.exports = router;