const express = require('express')

const router = express.Router()



router.get('/', (req, res) => {
    const query =  req.query 
    res.send({
         status: 0,
         msf: 'get请求成功',
         data: query
    })   
})

module.export  = router