const mysql = require('mysql');
const env = require('../../env')

// 创建数据库连接池
const mysqlPool = mysql.createPool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER_NAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  multipleStatements: true, // 该属性设置为true，可以执行多条sql，返回多个数据集，多个sql用分号分开
})
/**
 * 执行查询
 */
module.exports.query = function (sql, params = []) {
  console.log('query-sql>', sql, params);
  return new Promise((resolve, reject) => {
    mysqlPool.getConnection((error, connection) => {
      if (error) {
        mysqlPool.releaseConnection(connection);
        reject(error);
      } else {
        connection.query(sql, params, (error, rows) => {
          if (error) {
            mysqlPool.releaseConnection(connection);
            reject(error);
          } else {
            mysqlPool.releaseConnection(connection);
            resolve(rows);
          }
        })
      }
    })
  })
}
/**
 * 执行修改，删除
 */
module.exports.execute = function (sql, params = []) {
  console.log('execute-sql>', sql, params);
  return new Promise((resolve, reject) => {
    mysqlPool.getConnection((error, connection) => {
      if (error) {
        mysqlPool.releaseConnection(connection);
        reject(error);
      } else {
        connection.query(sql, params, (error, rows) => {
          if (error) {
            mysqlPool.releaseConnection(connection);
            reject(error);
          } else {
            mysqlPool.releaseConnection(connection);
            resolve(rows);
          }
        })
      }
    })
  })
}