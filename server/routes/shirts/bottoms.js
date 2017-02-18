const router = require('express').Router();
const controller = require('../../controllers/shirts');

router.get('/', controller.getShirtsBottoms);

module.exports = router;