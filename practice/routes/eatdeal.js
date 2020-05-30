var express = require('express');
var router = express.Router();

const eatdealController = require('../controller/eatdeal');

router.get('/', eatdealController.readAll);
router.put('/scrap', async (req, res) => {

});

module.exports = router;