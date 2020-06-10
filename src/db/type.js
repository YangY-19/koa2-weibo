/**
 * @description 封装sequelize数据类型
 * @author YangY
*/

const Sequelize = require('sequelize');

module.exports = {
    STRING: Sequelize.STRING,  //string
    DECIMAL: Sequelize.DECIMAL,  //只可以存 0~9
    TEXT: Sequelize.TEXT,
    INTEGER: Sequelize.INTEGER,  //整型
    BOOLEAN: Sequelize.BOOLEAN  //布尔类型
}