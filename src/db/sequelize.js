/**
 * @description 链接数据库配置
 * @author YangY
 */
const Sequelize = require('sequelize')
const { isPord, isTest } = require('../utils/env')

const conf = {
   host: 'localhost',
   dialect: 'mysql',
   timezone: '+08:00'
}

if (isTest) {
    //不打印sql语句
    conf.logging = () => {}
}

//线上环境，使用连接池
if (isPord) {
    conf.pool = {
        max: 5,
        min: 0,
        idle: 10000 //如果连接池10s 之内没有被使用， 则释放
    }
}

const seq = new Sequelize('koa2-weibo', 'root', 'ldy998326', conf)

module.exports = seq