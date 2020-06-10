/**
 * @description 链接数据库配置
 * @author YangY
 */
const Sequelize = require('sequelize')

const conf = {
   host: 'localhost',
   dialect: 'mysql'
}

const seq = new Sequelize('koa2-weibo', 'root', 'ldy998326', conf)

module.exports = seq