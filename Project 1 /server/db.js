const Pool = require("PG").Pool;

const pool = new Pool({
   user: "postgres", 
   password: "papalina",
   host: "localhost",
   port: 5432,
   database: "askaway"
})

module.exports = pool;