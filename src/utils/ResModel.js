/**
 * @description res 数据模型
 * @author YangY
*/

/**
 * 基础模块
 * @class BaseModel
 */

 class BaseModel {
    constructor({code, data, message}) {
        this.code = code
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
 }


class SuccessModel extends BaseModel {
    constructor(data) {
        super({
            code: 10000,
            data
        })
    }
}

class ErrorModel extends BaseModel {
   constructor({code, message}) {
       super({ code, message }) 
   }
}

module.exports = {
    SuccessModel, 
    ErrorModel
}