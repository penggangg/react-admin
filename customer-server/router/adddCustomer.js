/**
 * Created by 12 on 2017/7/3.
 */
const query = require('../utils/utils')
// (name,sex,age,address,phone,email,password,creatTime )
const router = (req, res) => {
  var dt = new Date();
  var date = [
  [dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('-'),
  [dt.getHours(), dt.getMinutes(), dt.getSeconds()].join(':')
  ].join(' ').replace(/(?=\b\d\b)/g, '0');
  let { name, age, phone, sex, address, email, password } = req.query
  let creatTime = date
  let result = {creatTime, name, age, phone, sex, address, email, password }
  query('insert into customer set ?',result, (err, results, fields) => {
    res.send({message: '添加成功'})
  })
}

module.exports = router