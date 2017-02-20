const router = require('express').Router();
const controller = require('../../controllers/clothes');
const passport = require('../../config/passport');

router.get('/', controller.getClothes);
router.get('/:id', controller.getCloth);
router.post('/',passport.authenticate('jwt', { session: false }), controller.postCloth);
router.put('/:id', passport.authenticate('jwt', { session: false }), controller.putCloth);
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.deleteCloth);

module.exports = router;