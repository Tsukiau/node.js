// 1. 导入 fs 模块，来操作文件
  const { log } = require('console')
const fs = require('fs')
 

// 2. 调用 fs.readFile() 方法读取文件
//    参数1：读取文件的存放路径
//    参数2：读取文件时候采用的编码格式，一般默认指定 utf8
//    参数3：回调函数，拿到读取失败和成功的结果  err  dataStr
    fs.readFile('./files/1.txt','utf-8',function(err,dataStr){
         console.log(err);
         console.log('----------------------');
         console.log(dataStr);

    })

  // 2.1 打印失败的结果
  // 如果读取成功，则 err 的值为 null
  // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined


  // 2.2 打印成功的结果

