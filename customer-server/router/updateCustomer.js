/**
 * Created by 12 on 2017/7/3.
 */
const query = require('../utils/utils')
// (name,sex,age,address,phone,email,password,creatTime )
const router = (req, res) => {
    console.log(req.query)
    // let {
    // name, sex, age, address, phone, email, password
    // } = req.query
    // let result = {
    // name, sex, age, address, phone, email, password 
    // }
    var dt = new Date();
    var date = [
    [dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('-'),
    [dt.getHours(), dt.getMinutes(), dt.getSeconds()].join(':')
    ].join(' ').replace(/(?=\b\d\b)/g, '0');
    let { name, age, phone, sex, address, email, password } = req.query
    let creatTime = date
    let result = {creatTime, name, age, phone, sex, address, email, password }
    query('update customer set ? where id= ?', [result, result.id], (err, results, fields) => {
        res.send({message: '修改成功'})
    })
}

module.exports = router