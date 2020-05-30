const pool = require('../modules/pool');

const restaurant = {
    readAll : async () => {
        const query = "SELECT * FROM restaurant";

        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = restaurant;