const router = require('express').Router();
const controller = require('../../controllers/clothes');

router.get('/', controller.getClothes);
router.get('/:id', controller.getCloth);
router.post('/', controller.postCloth);
router.put('/:id', controller.putCloth);
router.delete('/:id', controller.deleteCloth);

module.exports = router;