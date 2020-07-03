/**
 * @description 首页
 * @author 
*/

const Router = require('koa-router')
const Auth = require('../../utils/auth')
const { getSlideshow } = require('../../services/home')
const router = new Router({
    prefix: '/weibo'
}) 

//获取轮播图
router.get('/slideshow', new Auth().m, async ctx => {
    ctx.body = await getSlideshow()
})

module.exports = router