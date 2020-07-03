
 /**
  * @description 表关联
  * @author YangY
  */
 const User = require('./User')
 const Article = require('./Article')
 const Slideshow = require('./Slideshow')

//外键关联 belongsTo(属于)
Article.belongsTo(User, {
    // Article.userId 关联 User.id
    foreignKey: 'userId'
})
// // hasMany(多个)
// User对应多个Blog
User.hasMany(Article, {
    // Article.userId 关联 User.id
    foreignKey: 'userId'
})

module.exports = {
    User,
    Article,
    Slideshow
}