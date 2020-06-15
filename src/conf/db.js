/**
 * @description 储存配置
 * @author YangY
 */

 const { isProd } = require('../utils/env')

 let REDIS_CONF
 if (isProd) {
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    } 
 } else  {
   REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
 }

 module.exports = {
    REDIS_CONF
 }