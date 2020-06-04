const pool = require('../modules/pool');
const table = 'eatdeal';

const eatdeal = {
    readAll : async () => {
        const query = "SELECT * FROM eatdeal";

        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            throw err;
        }
    },

    scrap : async (eatdealIdx, scrap_int) => {
        if(scrap_int == 2){
            var firstQuery = `INSERT INTO eatdealscrap (eatdealIdx) VALUES(${eatdealIdx})`;
            var secondQuery = `UPDATE ${table} SET scrap=true WHERE eatdealIdx = ${eatdealIdx}`;
            var finalQuery = `SELECT * FROM ${table} WHERE eatdealIdx = ${eatdealIdx}`;
        }
        else{
            var firstQuery = `DELETE FROM eatdealscrap WHERE eatdealIdx = ${eatdealIdx}`;
            var secondQuery = `UPDATE ${table} SET scrap=false WHERE eatdealIdx = ${eatdealIdx}`;
            var finalQuery = `SELECT * FROM ${table} WHERE eatdealIdx = ${eatdealIdx}`;
        }
        try{
            await pool.queryParam(firstQuery);
            await pool.queryParam(secondQuery);
            const result = await pool.queryParam(finalQuery);
            return result;

        } catch(err){
            throw err;
        }

        
    }
}

module.exports = eatdeal;