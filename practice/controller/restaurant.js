let Restaurant = require('../models/restaurant');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

const restaurant = {
    readAll : async (req, res) => {
        const result = await Restaurant.readAll();

        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.RESTAURANT_LIST_SUCCESS, result));
    },

    advertise : async (req, res) => {
        const result = await Restaurant.advertise();

        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.ADVERTISE_SUCCESS, result));
    }
}

module.exports = restaurant;