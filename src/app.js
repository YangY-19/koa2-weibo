const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const config = require('../config')
const InitRouter = require('./routes/initRouter')

// 监听error 在页面显示
onerror(app)

// 中间件
app.use(bodyParser({
  enableType: ['json', 'form', 'text']
})) //post请求解析
  .use(json())
  .use(logger())
  .use(require('koa-static')(__dirname + '/public')) //添加静态目录

  //路由注册集合
InitRouter.initLoadRouters(app) 

//控制台打印error
app.on('error', function(err, ctx) { 
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`打开 http://localhost:${config.port} 进行查看`)
})
