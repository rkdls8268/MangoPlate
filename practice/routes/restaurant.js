var express = require('express');
var router = express.Router();

const restaurantController = require('../controller/restaurant');

router.get('/', restaurantController.readAll);
router.get('/ad', restaurantController.advertise); 
router.put('/scrap', async (req, res) => {

});

module.exports = router;