const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '12345',
    database: 'biblioteca'
});

module.exports = pool;