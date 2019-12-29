/*
 * @Author: isboyjc
 * @Date: 2019-12-29 17:06:45
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 17:49:04
 * @Description: config
 */
module.exports = {
  db:{
    dialect: "mysql",
    host: "localhost",
    database: "egg-test",
    username: "root",
    password: "123456"
  },
  middleware: [
    'logger'
  ]
}