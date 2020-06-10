const seq = require('./sequelize')
require('./model/index')

//创建
seq.authenticate().then(() => {
    console.log('创建成功!')
}).catch(() => {
    console.log('err')
})

// force: true 时, 如果数据库里有相同的表,则删除
seq.sync({force: true}).then(() => {
    console.log('同步成功!')
    process.exit() //执行成功退出
})

