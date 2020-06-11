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
