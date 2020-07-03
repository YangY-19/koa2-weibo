const { User, Article } = require('../index')


async function addUser() {
    // 创建用户
    const liu = await User.create({
        nickName: 'YangY',
        userName: '13333333333',
        passWord: '123456',
        gender: 1,
        portrait: 'https://ww4.sinaimg.cn/thumb150/007XsOdkly3gd4po4perrj30u00iddie.jpg',
        address: '江苏省苏州市工业园区',
        introduce: '日出东边落西边,高兴一天,悲伤也是一天'
    })
    // insert info `users` (`id`,`userName`,`nickName`,`passWord`,`createdAt`,`updatedAt`) values (default,'YangY','dongyang.liu','123456',?,?);
    const liuId = liu.dataValues.id
}

module.exports = addUser
