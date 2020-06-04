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

        const scrap_int = scrap ? 1 : 2;        

        if(!eatdealIdx || !scrap_int){
            res.status(statusCode.BAD_REQUEST)
                .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
            return;
        }

        const result = await Eatdeal.scrap(eatdealIdx, scrap_int);

        if(result.affectedRows == 0){
            console.log('affectedRows 0');
            return res.status(statusCode.DB_ERROR)
            .send(util.fail(statusCode.DB_ERROR, resMessage.SCRAP_FAIL));
        }

        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.SCRAP_SUCCESS, result));
    }
}

module.exports = eatdeal;