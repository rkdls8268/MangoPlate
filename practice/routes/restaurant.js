var express = require('express');
var router = express.Router();

const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
const util = require('../modules/util');

const restModel = require('../models/restaurant');

router.get('/', async (req, res) => {
    const result = await restModel.readAll();

    res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.BLOG_SUCCESS, result));
});

router.get('/ad', async (req, res) => {

}); 

router.put('/scrap', async (req, res) => {

});

module.exports = router;