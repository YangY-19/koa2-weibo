/* @description 用户数据模型
 * @author YangY
*/

const sequelize = require('../sequelize')
const { STRING, DECIMAL } = require('../type')

// 创建 User 模型   数据表名称是users
const User = sequelize.define('user',{
    // id会自动创建
    userName: {
        type: STRING, //varchar(255)
        allowNull: false, //是否可以为空
        comment:'账号' //账号
    },

    nickName: {
        type: STRING, //varchar(255)
        comment:'昵称' //昵称
    },

    passWord: {
        type: STRING, //varchar(255)
        allowNull: false, //是否可以为空
        comment:'密码' //密码
    },
    portrait: {
        type: STRING, //varchar(255)
        allowNull: true, //是否可以为空
        comment:'密码' //密码
    },
    gender: {
        type: DECIMAL, 
        allowNull: false,
        comment: '性别 (1: 男, 2:女)'
    },
    address: {
        type: STRING, //varchar(255)
        allowNull: true, //是否可以为空
        comment:'地址' //密码
    },
    introduce: {
        type: STRING,
        comment: '介绍' 
    }
})

module.exports = User