/**
 * @description 验证jwt
 * @author YangY
 */
const jwt = require('jsonwebtoken')
const util = require('util')
const verity = util.promisify(jwt.verify)

 class Auth {
    get m () {
        return async (ctx, next) => {
            const token = ctx.header.authorization
            try {
                let payload = await verity(token.split(' ')[1], 'YangY-1998')
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