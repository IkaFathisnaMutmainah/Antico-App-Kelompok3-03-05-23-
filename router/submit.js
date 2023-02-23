const answerController = require('../controllers/answers');
const router = require('express').Router();

router.post('/one', answerController.submitOne);
router.post('/many', answerController.submitMany);

module.exports = router;