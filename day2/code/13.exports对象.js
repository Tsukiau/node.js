// console.log(exports)
// console.log(module.exports)

// console.log(exports === module.exports)


exports.age = 20
exports =  {
  age : 28
}
module.exports = exports
const username = 'zs'

module.exports.username = username

// 最终，向外共享的结果，永远都是 module.exports 所指向的对象
