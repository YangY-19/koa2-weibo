const { User, Article } = require('./model/index')

//查询
async function select() {
    // findAll查询所有
    // findOne查询一条
    //findAndCountAll //查询所有, 会列出数据库里一共多少条 
    //  {
    //     "count": 2,
    //     "rows": [ ]
    //   }
   const liu1 = await User.findAndCountAll({
     limit: 2,   //限制本次查询 2 条
     offset: 0, //跳过多少条
     attributes:['userName','nickName', 'id'], //查询的列
     where: { //查询条件
        nickName: 'YangY',
        userName: 'dongyang.liu'
     },
     order: [ //排序方式
        ['id', 'desc'] //根据id倒序
     ]
   })

  
   //连表查询   连表查询要做外键关联
   const liu = await User.findAndCountAll({
    where: { //查询条件
       nickName: 'YangY',
    },
    // include 里相当于查询另一个表
    include: [
        {
            model: Article,
            where: {
                title: 'YangY标题'
            }

        }
    ]
  })
//   {
//     "liu": {
//         "count": 1,
//         "rows": [
//             {
//                 "id": 1,
//                 "userName": "dongyang.liu",
//                 "nickName": "YangY",
//                 "passWord": "123456",
//                 "articles": [
//                     {
//                         "id": 2,
//                         "userId": 1,
//                         "title": "YangY标题",
//                         "content": "YangY类容",
//                         "comeFrom": "来自江苏沭阳",
//                     }
//                 ]
//             }
//         ]
//     }
// }

   return liu
}

// select `id`, `userName`, `nickName`, `passWord`, `createdAt`, `updatedAt` from `users` as `user` where `user`.`nickName` = 'YangY' limit 1;
// select `id`, `userName`, `nickName` from `users` as `user` where `user`.`nickName` = 'YangY' and `user`.`userName` = 'dongyang.liu' limit 1; //limit 1 查询一条
// select `id`, `userName`, `nickName` from `users` as `user` where `user`.`nickName` = 'YangY'  order by `user`.`id` desc limit 1; //排序

//User.findAndCountAll({
    // limit: 2,   //限制本次查询 2 条
    // offset: 0, 
// SELECT count(*) AS `count` FROM `users` AS `user` WHERE `user`.`nickName` = 'YangY' AND `user`.`userName` = 'dongyang.liu';
// SELECT `userName`, `nickName`, `id` FROM `users` AS `user` WHERE `user`.`nickName` = 'YangY' AND `user`.`userName` = 'dongyang.liu' ORDER BY `user`.`id` DESC LIMIT 0, 2;

module.exports = select