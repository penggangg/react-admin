/**
 * Created by 12 on 2017/7/3.
 */
const query = require('../utils/utils')
// (name,sex,age,address,phone,email,password,creatTime )
const router = (req, res) => {
  const name = req.query.name
  console.log(name)
  query(name ? 'select * from customer where name = ? ': 'select * from customer', [name] , (err, results, fields) => {
    if (err) throw err
    console.log(results)
    res.send({
        customerList:results
    })
  })
}

module.exports = router