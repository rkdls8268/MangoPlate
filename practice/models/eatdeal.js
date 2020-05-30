const pool = require('../modules/pool');

const eatdeal = {
    readAll : async () => {
        const query = "SELECT * FROM eatdeal";

        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = eatdeal;