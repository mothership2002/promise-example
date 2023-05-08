const express = require('express')
const router = express.Router()
const { getPool, queryExecute } = require('../DB/connection')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const query = 'select count(*) from test_table'
  const pool = getPool();
  try {
    const rows = await queryExecute(pool, query)
    res.send(rows)
  } catch (error) {
    console.log(error);
    res.send("hello")
  }
  
})

module.exports = router
