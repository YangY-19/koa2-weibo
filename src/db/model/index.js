const Sequelize = require('sequelize');
const sequelize = require('../sequelize')

// 创建 User 模型   数据表名称是users
const User = sequelize.define('user',{
    // id会自动创建
    userName: {
        type: Sequelize.STRING, //varchar(255)
        allowNull: false, //是否可以为空
        comment:'账号' //账号
    },

    nickName: {
        type: Sequelize.STRING, //varchar(255)
        comment:'昵称' //昵称
    },

    passWord: {
        type: Sequelize.STRING, //varchar(255)
        allowNull: false, //是否可以为空
        comment:'密码' //密码
    }
})

const Article = sequelize.define('article', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '写文章的人'
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '文章题目'
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: '文章类容'
    },
    comeFrom: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '来自XXX'
    }
})

//外键关联 belongsTo(属于)
Article.belongsTo(User, {
    // Article.userId 关联 User.id
    foreignKey: 'userId'
})
// // hasMany(多个)
// User对应多个Blog
User.hasMany(Article, {
    // Article.userId 关联 User.id
    foreignKey: 'userId'
})

module.exports = {
    User,
    Article
}