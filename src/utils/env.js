/**
 * @description 环境变量
 * @author YangY
 */

const ENV = process.env.NODE_ENV
module.exports = {
    isDev: ENV === 'dev',
    notDev: ENV !== 'dev',
    isProd: ENV === 'production',
    notProd: ENV !== 'production',
    isTest: ENV === 'test',
    notTest: ENV !== 'test',
    devDomainName: 'http://localhost:8088'
  }
  