/*
 * @Author: isboyjc
 * @Date: 2019-12-29 12:46:21
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 17:38:36
 * @Description: controller home
 */
module.exports = app => ({
  index: async () => {
    // ctx.body = "CONTROLLER 首页"

    // const name = await app.$service.user.getName();
    // app.ctx.body = "CONTROLLER 首页，姓名"+name

    // 调用model层
    app.ctx.body = app.$model.user.findAll()
  },
  detail: async () => {
    // ctx.body = "CONTROLLER 详情"
    const age = await app.$service.user.getAge();
    app.ctx.body = "CONTROLLER 详情，年龄"+age
  }
})