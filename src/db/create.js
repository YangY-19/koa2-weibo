const { User, Article } = require('./model/index')


async function addUser() {
    // 创建用户
    const liu = await User.create({
        nickName: 'YangY',
        userName: 'dongyang.liu',
        passWord: '123456'
    })
    // insert info `users` (`id`,`userName`,`nickName`,`passWord`,`createdAt`,`updatedAt`) values (default,'YangY','dongyang.liu','123456',?,?);
    const liuId = liu.dataValues.id

    await Article.create({
        userId: liuId,
        title: 'YangY标题',
        content: 'YangY类容',
        comeFrom: '来自江苏沭阳'
    })
}


async function select() {
   const liu = await User.findOne({
     attributes:['userName','nickName'], //查询的列
     where: { //查询条件
        nickName: 'YangY',
        userName: 'dongyang.liu'
     },
     order: [ //排序方式
        ['id', 'desc'] //根据id倒序
     ]
   })
   return liu
}

// select `id`, `userName`, `nickName`, `passWord`, `createdAt`, `updatedAt` from `users` as `user` where `user`.`nickName` = 'YangY' limit 1;
// select `id`, `userName`, `nickName` from `users` as `user` where `user`.`nickName` = 'YangY' and `user`.`userName` = 'dongyang.liu' limit 1;
// select `id`, `userName`, `nickName` from `users` as `user` where `user`.`nickName` = 'YangY'  order by `user`.`id` desc limit 1; //排序

module.exports = {
    addUser,
    select
}