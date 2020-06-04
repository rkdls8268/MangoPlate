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
    },

    scrap : async(req, res) => {
        const restaurantIdx = req.body.restaurantIdx;
        const scrap = req.body.scrap;

        const scrap_int = scrap ? 1 : 2;        

        if(!restaurantIdx || !scrap_int){
            res.status(statusCode.BAD_REQUEST)
                .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
            return;
        }

        const result = await Restaurant.scrap(restaurantIdx, scrap_int);

        if(result.affectedRows == 0){
            console.log('affectedRows 0');
            return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.SCRAP_FAIL));
        }

        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.SCRAP_SUCCESS, result));
    }
}

module.exports = restaurant;