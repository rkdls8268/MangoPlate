const pool = require('../modules/pool');
const table = 'restaurant';

const restaurant = {
    readAll : async () => {
        const query = `SELECT * FROM ${table};`;

        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            throw err;
        }
    },

    advertise : async () => {
        const query = `SELECT * FROM advertise`;

        try{
            const result = await pool.queryParam(query);
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
    },

    scrap : async (restaurantIdx, scrap_int) => {
        if(scrap_int == 2){
            var firstQuery = `INSERT INTO restaurantscrap (restaurantIdx) VALUES(${restaurantIdx})`;
            var secondQuery = `UPDATE ${table} SET scrap=true WHERE restaurantIdx = ${restaurantIdx}`;
            var finalQuery = `SELECT * FROM ${table} WHERE restaurantIdx = ${restaurantIdx}`;
        }
        else{
            var firstQuery = `DELETE FROM restaurantscrap WHERE restaurantIdx = ${restaurantIdx}`;
            var secondQuery = `UPDATE ${table} SET scrap=false WHERE restaurantIdx = ${restaurantIdx}`;
            var finalQuery = `SELECT * FROM ${table} WHERE restaurantIdx = ${restaurantIdx}`;
        }
        try{
            await pool.queryParam(firstQuery);
            await pool.queryParam(secondQuery);
            const result = await pool.queryParam(finalQuery);
            // console.log(secondResult[0]);
            return result;

        } catch(err){
            throw err;
        }

        
    }
}

module.exports = restaurant;