const mysql = require('mysql')
const DBConfig = require('./config.json')

let pool;

const getResult = (conn, query) => {
  return new Promise((resolve, reject) => {
    conn.query(query, (err, rows, field) => {
      conn.release();
      if(!err) {
        resolve(rows);
      }
      else {
        resolve(null);
        // reject(err)
      }
    });
  });
};

module.exports = {
  getPool: () => {
    if(!pool) {
      console.log('create connection pool...');
      pool = mysql.createPool(DBConfig);
    }
    return pool;
  },

  queryExecute: (pool, query) => {
    return new Promise((resolve, reject) => {
      pool.getConnection(async (err, conn) => {
        if(!err) {
          resolve(await getResult(conn, query));
        }
        else {
          resolve(null)
          // reject(err)
        }
      });
    });
  }
}
