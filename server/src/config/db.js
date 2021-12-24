const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'users_db',
    password: '1111',
    port: '4000'
})

module.exports = pool;
