/*
 * @Author: isboyjc
 * @Date: 2019-12-29 12:23:40
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 16:58:53
 * @Description: 入口文件
 */

const egg = require("./loader/egg");
const app = new egg()
app.start(3000)