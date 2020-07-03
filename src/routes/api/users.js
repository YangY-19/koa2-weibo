/**
 * @description 
 * @author 
*/

const Router = require('koa-router')
const Auth = require('../../utils/auth')
const { getToken, getUserInfoById } = require('../../controller/user')
const router = new Router({
    prefix: '/weibo/user'
})


//登录
router.post('/login', async ctx => {
     const { userName, passWord } = ctx.request.body
     ctx.body = await getToken(userName, passWord)
})

//获取用户信息
router.get('/getUserInfo', new Auth().m, async ctx => {
     const { id } = ctx.request.body
     ctx.body = await getUserInfoById(Number(id))

})

module.exports = router