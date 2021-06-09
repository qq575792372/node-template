// 修改环境配置，指定dev，pre，pro，并修改对应的配置文件
const SET_ENV = "dev"

// 根据指定的环境，导出配置
module.exports = require('./' + SET_ENV + '.env.js')