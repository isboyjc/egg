/*
 * @Author: isboyjc
 * @Date: 2019-12-29 18:35:47
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 18:39:55
 * @Description: log日志定时任务 3s/次
 */
module.exports = {
  interval: "*/3 * * * * *",
  handler(){
    console.log(`定时任务 3s执行一次 ${new Date()}`)
  }
}