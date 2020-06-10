/**
 * @description 
 * @author 
*/

const Router = require('koa-router')
const {addUser, select} = require('../../db/create')
const router = new Router({
    prefix: '/index'
})

router.get('/', async ctx => {
    await addUser()
    ctx.body = 'koa2'
})

router.get('/s', async ctx => {
    const liu = await select()
    ctx.body = {
        liu
    }
})

module.exports = router