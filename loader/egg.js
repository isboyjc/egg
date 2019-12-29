/*
 * @Author: isboyjc
 * @Date: 2019-12-29 12:31:09
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 22:45:07
 * @Description: egg核心类封装
 */
const Koa = require("koa");

const {
  initRouter,
  initController,
  initService,
  loadConfig,
  initSchedule
} = require("./egg-loader");

// egg核心类
class egg {
  constructor(config){
    // 创建koa实例
    this.$app = new Koa(config);

    // 约定config解析，初始化
    // loadConfig(this)

    // 约定service解析，初始化
    this.$service = initService(this);

    // 约定controller解析，初始化
    this.$controller = initController(this);

    // 约定路由解析，初始化路由
    this.$router = initRouter(this);
    this.$app.use(this.$router.routes());

    initSchedule()
  }

  start(port,fn = ()=>{console.log(`hello! egg server start，listen port：${port}!`)}){
    this.$app.listen(port,fn);
  }
}

// 导出egg
module.exports = egg