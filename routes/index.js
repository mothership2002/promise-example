const express = require('express')
const router = express.Router()
const { getPool, queryExecute } = require('../DB/connection')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const query = 'select count(*) from test_table'
  const pool = getPool();
  const rows = await queryExecute(pool, query)
  
  console.log(rows)

  // pool.getConnection((err, conn) => {
  //   if (err) throw err
  //   conn.query(query, (err, row, field) => {
  //     if (!err) {
  //       console.log(row)
  //     } else {
  //       console.error(err)
  //     }
  //   })
  //   conn.release()
  // })

  res.send(rows)
})

module.exports = router
