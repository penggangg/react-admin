/**
 * Created by 12 on 2017/7/3.
 */
const query = require('../utils/utils')
// (name,sex,age,address,phone,email,password,creatTime )
const router = (req, res) => {
    query('delete from customer where id= ?', [req.query.id], (err, results, fields) => {
        res.send({message: '删除成功'})
    })
}

module.exports = router