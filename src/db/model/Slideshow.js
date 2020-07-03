/**
 * @description 轮播图表
 * @author YangY
 */
const sequelize = require('../sequelize')
const { STRING } = require('../type')

const Slideshow = sequelize.define('slideshow', {
    image: {
        type: STRING,
        allowNull: false
    },
    url: {
        type: STRING
    }
})

module.exports = Slideshow