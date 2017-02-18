const router = require('express').Router();
const controller = require('../../controllers/clothes');
const authController = require('../../controllers/auth');

router.get('/', controller.getClothes);
router.get('/:id', controller.getCloth);
router.post('/', authController.isAuthenticated, controller.postCloth);
router.put('/:id', authController.isAuthenticated, controller.putCloth);
router.delete('/:id', authController.isAuthenticated, controller.deleteCloth);

module.exports = router;