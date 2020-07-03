const { User, Article } = require('../index')

async function update () {
  const update = await Article.update({
       content: 'YangY标题'  //要改变的类容
   }, {
       where: {
         title: 'YangY标题' //查询要改的那条数据
       }
   })
   return update
}

module.exports = update