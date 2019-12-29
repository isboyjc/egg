/*
 * @Author: isboyjc
 * @Date: 2019-12-29 11:52:15
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 12:51:48
 * @Description: 根路由
 */

//  无controller时
// module.exports = {
//   "get /": async ctx => {
//     ctx.body = "首页"
//   },
//   "get /detail": async ctx => {
//     ctx.body = "详情"
//   }
// }

// 有controller时
module.exports = app => ({
  "get /": app.$controller.home.index,
  "get /detail": app.$controller.home.detail
})