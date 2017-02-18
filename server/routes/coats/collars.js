const router = require('express').Router();
const controller = require('../../controllers/coats');

router.get('/', controller.getCoatsCollars);

module.exports = router;