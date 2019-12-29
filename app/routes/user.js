/*
 * @Author: isboyjc
 * @Date: 2019-12-29 11:54:04
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 17:43:32
 * @Description: user模块路由
 */

// 使用service
module.exports = {
  "get /": async app => {
    // ctx.body = "用户首页"
    const name = await app.$service.user.getName()
    app.ctx.body =  name
  },
  "get /info": async app => {
    // ctx.body = "用户详情"
    const age = await app.$service.user.getAge()
    app.ctx.body = "用户年龄：" + age
  }
}