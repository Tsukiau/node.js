 // 1. 导入 http 模块
const http = require('http')
 // 2. 创建 web 服务器实例
const app = http.createServer()
 // 3. 为服务器实例绑定 request 事件，监听客户端的请求
app.on('request',( req, res) =>{
     res.setHeader('Content-Type', 'text/html; charset=utf-8')
    console.log(req.url, req.method)
     res.end('响应成功')
 })

 // 4. 启动服务器
app.listen(80, () => {
    console.log('启动成功')
})
