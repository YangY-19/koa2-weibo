/**
 * @description 链接redis 方法 get set
 * @author YangY
 */

 const redis = require('redis')
 const { REDIS_CONF } = require('../conf/db')

 const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
 redisClient.on('error', err => {
     console.log('redisError',err)
 })

/**
 * @param {String} key
 * @param {String} val
 * @param {number} [timeout=60 * 60]
 * @returns set
 */
function set(key, val, timeout = 60 * 60) {
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }
    redisClient.set(key, val)
    redisClient.expire(key, timeout)
 }

 /**
 * @param {String} key
 * @param {String} val
 * @param {number} [timeout=60 * 60]
 * @returns get
 */
function get(key) {
    const promise = new Promise((resolve, reject) => {
       redisClient.get(key, (err, val) => {
            if (err) {
                return reject(null)
            } else  {
               
               try {
                return resolve(JSON.stringify(val))
               } catch {
                return resolve(val)
               }
            }
        })
    })
    return promise
}

module.exports = {
    get,
    set
}
