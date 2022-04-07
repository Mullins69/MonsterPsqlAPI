const { response } = require('express');
const express = require('express');
const router = express.Router();
const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.dbport,
  });

  //get all monsters
router.get('/',(req,res) =>{
    pool.query("SELECT * FROM monsters ORDER BY id ASC", (error, response) => {
        if (error) {
          return console.log(error);
        }
        res.json(response.rows);
      });
})

//get single monster
router.get('/:id',(req,res)=>{
    const {id} = req.params;


    pool.query(`SELECT * FROM monsters WHERE id=${id}`, (error, response)=>{
        if (error) {
            return console.log(error);
          }
          res.json(response.rows);
        });
    
})

//adding a monster
router.post('/', (req, res, next)=>{
    const {name , personality} = req.body
    pool.query(`INSERT INTO monsters(name, personality) VALUES( '${name}','${personality}')`, (error, response)=>{
        if (error) {
            return console.log(error);
          }
          res.json(response.rows);
        });
})

router.put('/:id', (req, res, next)=>{
    const {id} = req.params;
    const {name , personality} = req.body
    pool.query(`UPDATE monsters SET name=('${name}'),personality=('${personality}') WHERE id=${id}`, (error, response)=>{
        if (error) {
            return console.log(error);
          }
          res.json(response.rows);
        });
})

module.exports = router;