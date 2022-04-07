require("dotenv").config();

const {Pool} = require('pg');
const pool = new Pool({user: process.env.user, host:process.env.host, database:process.env.database, password:process.env.password, port:process.env.port});

pool.query('SELECT * FROM monsters', (err , res) =>
{
if(err){
    return console.log(err);
}
console.log(res);
})