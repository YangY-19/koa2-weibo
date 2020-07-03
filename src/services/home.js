/**
 * @description 轮播图 service
 * @author YangY
*/

const { Slideshow } = require('../db/model/index')
const { SuccessModel } = require('../utils/ResModel')
//获取轮播图
async function getSlideshow() {
   let list = await Slideshow.findAll({
       attributes:['id', 'url', 'image']
   }) 
   return new SuccessModel(list)
}

module.exports = {
    getSlideshow
}