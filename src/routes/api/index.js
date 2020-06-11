/**
 * @description 
 * @author 
*/

const Router = require('koa-router')
const addUser = require('../../db/create')
const select = require('../../db/select')
const update = require('../../db/update')
const deleted = require("../../db/delete")
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

router.get('/u', async ctx => {
    const liu = await update()
    ctx.body = {
        liu
    }
})

router.get('/d', async ctx => {
    const liu = await deleted()
    ctx.body = {
        liu
    }
})


module.exports = router