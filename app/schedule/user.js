/*
 * @Author: isboyjc
 * @Date: 2019-12-29 18:35:53
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 18:39:42
 * @Description: user 查询定时任务
 */

module.exports = {
  interval: "30 * * * * *",
  handler(){
    console.log(`定时任务 30s执行一次 ${new Date()}`)
  }
}