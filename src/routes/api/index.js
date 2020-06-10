/**
 * @description 
 * @author 
*/

const Router = require('koa-router')
const router = new Router({
    prefix: '/index'
})

router.get('/', async ctx => {
    ctx.body = 'koa2'
})

module.exports = router