var express = require('express');
var router = express.Router();

router.use('/restaurant', require('./restaurant'));
router.use('/eatdeal', require('./eatdeal'));

module.exports = router;
