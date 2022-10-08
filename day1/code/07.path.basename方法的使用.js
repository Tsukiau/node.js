/* const path = require('path')

 定义文件的存放路径
const fpath = '/a/b/c/index.html'

 const fullName = path.basename(fpath)
console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt) */



const path = require('path')

const a = '/a/b/c/index.html'
/* const aa = path.basename(a)
console.log(aa); */

const aaa = path.basename(a ,'.html')
console.log(aaa);