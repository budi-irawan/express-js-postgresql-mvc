const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    database: 'coding',
    port: 5432,
})

module.exports = pool;