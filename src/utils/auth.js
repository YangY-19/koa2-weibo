/**
 * @description 验证jwt
 * @author YangY
 */
const jwt = require('jsonwebtoken')
const util = require('util')
const { JWT_SECRET } = require('../conf/password')
const verity = util.promisify(jwt.verify)

 class Auth {
    get m () {
        return async (ctx, next) => {
            const token = ctx.header.authorization
            try {
                let payload = await verity(token.split(' ')[1], JWT_SECRET)
                ctx.auth = {
                    userInfo: payload
                 }
            } catch (error) {
            }
            await next()
       }
    }
}

 module.exports = Auth