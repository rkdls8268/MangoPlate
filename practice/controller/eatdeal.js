let Eatdeal = require('../models/eatdeal');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

const eatdeal = {
    readAll : async (req, res) => {
        const result = await Eatdeal.readAll();

        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.EATDEAL_LIST_SUCCESS, result));
    }
}

module.exports = eatdeal;