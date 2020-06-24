/**
 * @description 
 * @author 
*/

const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const addUser = require('../../db/create')
const select = require('../../db/select')
const update = require('../../db/update')
const deleted = require("../../db/delete")
const Auth = require('../../utils/auth')
const { User } = require('../../db/model/index')
const router = new Router({
    prefix: '/user'
})


//登录
router.post('/login', async ctx => {
     const { userName, passWord } = ctx.request.body
    
     const userInfo = await User.findOne({
         where: {
             userName,
             passWord
         },
         attributes: ['id', 'userName', 'nickName']
     })

     if (userInfo.dataValues) {
        let token = jwt.sign(userInfo.dataValues, 'YangY-1998', {expiresIn: '1h'})
        ctx.body= {
            errno: 0,
            data: token
        }
     } else {
        ctx.body= {
            errno: -1,
            mas: '登录失败'
        }
     }

})

router.get('/', async ctx => {
    await addUser()
    ctx.body = 'koa2'
})

router.get('/s', new Auth().m, async ctx => {
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