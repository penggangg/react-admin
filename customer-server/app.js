/**
 * Created by 12 on 2017/7/3.
 */
const express = require('express')
const app = express()

// 跨域设置
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})

app.get('/', function (req, res) {
  res.send('hello express')
})

app.get('/addCustomer', require('./router/adddCustomer'))
app.get('/updateCustomer', require('./router/updateCustomer'))
app.get('/deleteCustomer', require('./router/deleteCustomer'))
app.get('/customerList', require('./router/customerList'))
const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`server running @${port}`)
})
