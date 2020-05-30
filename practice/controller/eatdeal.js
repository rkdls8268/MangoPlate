let Eatdeal = require('../models/eatdeal');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

const eatdeal = {
    readAll : async (req, res) => {
        const result = await Eatdeal.readAll();

        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.EATDEAL_LIST_SUCCESS, result));
    },

    scrap : async(req, res) => {
        const eatdealIdx = req.body.eatdealIdx;
        const scrap = req.body.scrap;

        const result = await Eatdeal.scrap(eatdealIdx, scrap);

        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.SCRAP_SUCCESS, result));
    }
}

module.exports = eatdeal;