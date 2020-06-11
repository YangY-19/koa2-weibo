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

module.exports = addUser
