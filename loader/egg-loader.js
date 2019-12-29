/*
 * @Author: isboyjc
 * @Date: 2019-12-29 11:57:48
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 18:49:57
 * @Description: loader
 */
const fs = require("fs");
const path = require("path");
const Router = require("koa-router");

/**
 * @description: 读取文件方法
 * @param {String} dir 读取目标文件
 * @param {Function} callback 读取回调
 * @return
 */
function load(dir,callback){
  // 获取绝对路径
  const url = path.resolve(__dirname,dir);
  // 同步读取目录下文件
  const files = fs.readdirSync(url);
  // 遍历文件处理
  files.map(fileName=>{
    // 文件去.js后缀
    fileName = fileName.replace(".js","");
    // 加载文件
    const file = require(url + "/" + fileName);
    // 回调出去
    callback && callback(fileName,file);
  })
}



/**
 * @description: 路由约定加载loader
 * @param {Object} app server实例
 * @return: koa路由实例
 */
function initRouter(app){
  const router = new Router();
  // load读取处理
  load("../app/routes",(fileName,routes)=>{
    // 处理路由地址，index为根路由，特殊处理
    const prefix = fileName == "index" ? "" : `/${fileName}`

    // 判断load解析路由中是否为函数，是-函数传入app实例，否-无
    // 应对有无controller两种状况
    routes = typeof routes == "function" ? routes(app) : routes

    // 解析文件内容
    Object.keys(routes).map(key => {
      // 获取key中请求method及path
      const [method, path] = key.split(" ");
      console.log(`Router映射：method->${method.toLocaleUpperCase()} path->${prefix + path}`);
      // 将解析后的路由参数放置到koa路由中
      router[method](prefix + path, async ctx => {
        // 珂基化传值
        app.ctx = ctx
        await routes[key](app)
      });
    })
  })
  return router
}


/**
 * @description: controller约定加载loader
 * @param {Object} app server实例
 * @return: controller对象
 */
function initController(app){
  // controller对象
  const controllers = {}
  load("../app/controller",(fileName,controller)=>{
    // controllers追加key=文件名 value=文件内容，基于约定
    controllers[fileName] = controller(app)
  })
  return controllers
}


/**
 * @description: service约定加载loader
 * @param {Object} app server实例
 * @return: service对象
 */
function initService(app){
  // service对象
  const services = {};
  load("../app/service",(fileName,service)=>{
    // services追加key=文件名 value=文件内容，基于约定
    services[fileName] = service(app)
  })
  return services
}



const Sequelize = require("sequelize");
/**
 * @description: config配置loader方法
 * @param {Object} app server实例
 * @return: 
 */
function loadConfig(app){
  load("../config",(fileName,config)=>{
    // 判断是否为config文件
    if(fileName==="config"){
      // 判断是否有db配置
      if(config.db){
        app.$db = new Sequelize(config.db)

        // 加载model模型
        app.$model = {}
        load("../app/model",(fileName,{schema,options})=>{
          app.$model[fileName] = app.$db.define(fileName,schema,options)
        })
        app.$db.sync()
      }

      // 判断是否有middleware配置
      if(config.middleware){
        config.map(mwName => {
          const middlewarePath = "../app/middleware/" + mwName
          app.use(require(middlewarePath))
        })
      }
    }
  })
}


const schedule = require("node-schedule");
/**
 * @description: 定时任务loader
 * @return: 
 */
function initSchedule(){
  load("../app/schedule",(fileName,scheduleConfig) => {
    schedule.scheduleJob(scheduleConfig.interval, scheduleConfig.handler)
  })
}


// 导出loader
module.exports = {
  initRouter,
  initController,
  initService,
  loadConfig,
  initSchedule
}