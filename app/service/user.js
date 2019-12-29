/*
 * @Author: isboyjc
 * @Date: 2019-12-29 15:52:49
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-29 17:38:23
 * @Description: service
 */

module.exports = app => ({
  getName(){
    // return delay("isboyjc",1000)

    // 调用model层
    return app.$model.user.findAll()
  },
  getAge(){
    return 100
  }
})



/**
 * @description: 定时返回执行承诺-防异步方法
 * @param {Any} data 数据
 * @param {Number} tick 定时返回时间
 * @return: data数据
 */
const delay = (data,tick) => new Promise(resolve => {
  setTimeout(()=>{
    resolve(data)
  },tick)
})