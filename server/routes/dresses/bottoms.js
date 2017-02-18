const router = require('express').Router();
const controller = require('../../controllers/dresses');

router.get('/', controller.getDressesBottoms);

module.exports = router;