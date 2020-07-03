/**
 * @description User service
 * @author YangY
*/

const { User } = require('../db/model/index')
const { formatUser } = require('./_format')
async function getUserInfo({userId, userName, passWord, nickName}) {
    let whereOpt = {}
    if (userId) {
        whereOpt = Object.assign({}, { id: userId })
    }
    if (userName && passWord) {
        whereOpt = Object.assign({}, { userName }, { passWord })
    }
    if (nickName) {
        whereOpt = Object.assign({}, { nickName })
    }
    const userInfo = await User.findOne({
        where: whereOpt,
        attributes: ['id', 'userName', 'nickName', 'portrait', 'gender', 'address', 'introduce']
    })
    if (userInfo == null) return null
    return formatUser(userInfo.dataValues)
}

module.exports = {
    getUserInfo
}