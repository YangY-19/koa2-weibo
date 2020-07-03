/**
 * @description 数据格式化
 * @author YangY
*/


function imgs () {
    let imgs = [
        'https://www.veer.com/photo/301663045',
        'https://www.veer.com/photo/302989341',
        'https://www.veer.com/photo/170649743',
        'https://www.veer.com/photo/133331298',
        'https://www.veer.com/photo/145842784',
        'https://www.veer.com/photo/145842784',
        'https://www.veer.com/photo/149299477',
        'https://www.veer.com/photo/142446610',
        'https://www.veer.com/photo/134549394',
        'https://www.veer.com/photo/164182515'
    ]

    let index = Math.floor(Math.random() * 10)
    return imgs[index]
}

function formatUser (data) {
   if (data == null) return data
   if (data instanceof Array) {
       data.map((item) => {
           if (item.portrait == null) {
            item.portrait = imgs()
           }
       })
     return data
   }
 
   //是对象的时候
   if (data.portrait == null) {
     data.portrait = imgs()
   }
   return data
   
}

module.exports = {
    formatUser
}