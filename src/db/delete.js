const { User, Article } = require('./model/index')

async function deleteData () {
  const deletes = await Article.destroy({
      where: {
          title:"YangY标题"
      },
      force: true, //真删还是假删 为false是,数据不会被删除 daleted_at会有值
  })

  //连表删除 删除用户会把该用户创建的文章删除
   return deletes
}

module.exports = deleteData