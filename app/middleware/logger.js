/*
 * @Author: isboyjc
 * @Date: 2019-12-29 17:49:28
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 17:54:04
 * @Description: logger日志中间件
 */
module.exports = async (ctx, next) => {
  console.log(`${ctx.method} ${ctx.path}`)
  const start = new Date()
  await next()
  const duration = new Date() - start
  console.log(`${ctx.method} ${ctx.path} ${ctx.status} ${duration}ms`)
}