/*
* @description 文章模型
* @author YangY
*/
const sequelize = require('../sequelize')
const { INTEGER, TEXT, STRING } = require('../type') 

const Article = sequelize.define('article', {
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '写文章的人'
    },
    title: {
        type: STRING,
        allowNull: false,
        comment: '文章题目'
    },
    content: {
        type: TEXT,
        allowNull: false,
        comment: '文章类容'
    },
    image: {
        type: STRING,
        comment: '文章主图'
    },
    comeFrom: {
        type: STRING,
        allowNull: false,
        comment: '来自XXX'
    }
})


module.exports = Article