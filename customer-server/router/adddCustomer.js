/**
 * Created by 12 on 2017/7/3.
 */
const query = require('../utils/utils')
// (name,sex,age,address,phone,email,password,creatTime )
const router = (req, res) => {
  const book = req.query.book
  const id = req.query.id
  
  let result = {
    name: '彭刚222',
    sex: 1,
    age: 26,
    address: '湖北省潜江市111',
    phone: '15007305228',
    email: '918800642@qq.com',
    password: '19930524',
    creatTime: '2018-10-10'
  }
  query('insert into customer set ?',result, (err, results, fields) => {
    
  })
}

module.exports = router