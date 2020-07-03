/*
 * @description user 业务逻辑
 * @author YangY
*/
const { SuccessModel, ErrorModel } = require('../utils/ResModel')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../conf/password')
const { getUserInfo } = require('../services/user')

/**
 * 创建token
 * @param {*} userName
 * @param {*} passWord
 */
async function getToken(userName, passWord) {
   const userInfo = await getUserInfo({userName, passWord})
   if (userInfo) {
      let token = jwt.sign(userInfo, JWT_SECRET, {expiresIn: '1h'})
      let data = Object.assign({}, {token}, {userId: userInfo.id})
      return new SuccessModel(data)
    } else {
        return new ErrorModel({
            code: 10001,
            message: '登录失败'
        })
    }
}

/**
 * 根据id查询用户信息
 * @param {*} id
 */
async function getUserInfoById (userId) {
    const userInfo = await getUserInfo({ userId })
    if (userInfo) {
        return new SuccessModel(userInfo)
    } else {
        return new ErrorModel({
            code: 10001,
            message: '查询用户失败'
        })
    }
}

module.exports = {
    getToken,
    getUserInfoById
}