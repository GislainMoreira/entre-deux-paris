const router = require('express').Router();
const controller = require('../../controllers/jackets');

router.get('/', controller.getJacketsTops);

module.exports = router;