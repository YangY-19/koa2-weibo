# koa2 项目
## kuangJia分支是对koa2框架的创建, 目录整理

## sequelize分支是对 sequelize Api的整理
#### 创建数据
######     User.create({
######         nickName: 'YangY',
######         userName: 'dongyang.liu',
######         passWord: '123456'
######     })

#### 查询数据
#####  findOne 查询一条数据
#####  findAll 查询所有数据  
#####  findAll({
#####     limit: 2, 查询2条数据 
#####     offset: 0  跳过多少条
##### })   
##### findAndCountAll 

######     User.findOne({
######         where: { //查询条件
######        nickName: 'YangY',
######        userName: 'dongyang.liu'
######     },
######     order: [ //排序方式
######        ['id', 'desc'] //根据id倒序
######     ]
######     })

#### 更改数据
##### Article.update({
#####     title: '新的title'  
##### }{
#####    where: {
#####        title: 'xxx'  //查询要改的那个条数据
#####    }
##### })

#### 删除数据
##### Article.destroy({
#####    where: {
#####        title: 'xxx'
#####    }
##### })

## jwt 
```javascript
app.js
const jwtKoa = require('koa-jwt')
app.use(jwtKoa({ //json web token
    secret: 'YangY-1998'
  }).unless({
    path: [/^\/user\/login/]
  }))

添加token
const jwt = require('jsonwebtoken')  
用户密码输入正确以后
let token = jwt.sign(userInfo.dataValues, 'YangY-1998', {expiresIn: '1h'})

验证token
const jwt = require('jsonwebtoken')
const util = require('util')
const verity = util.promisify(jwt.verify)
let payload = await verity(token.split(' ')[1], 'YangY-1998')
ctx.auth = {
    userInfo: payload
}
```

## 调试
##### "scripts": {
#####    "start": "cross-env NODE_ENV=dev ./node_modules/.bin/nodemon --inspect=9229 src/app.js"
#####  },
##### chrome浏览器里输入 chrome://inspect/#devices 就可以调试了