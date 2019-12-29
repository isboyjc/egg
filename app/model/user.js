/*
 * @Author: isboyjc
 * @Date: 2019-12-29 17:21:28
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 17:23:41
 * @Description: user model层
 */
const { STRING } = require("sequelize")
module.exports = {
  schema: {
    name: STRING(30)
  },
  options: {
    timestamps: false
  }
}