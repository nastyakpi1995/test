const jwt = require('jsonwebtoken');
const db = require("../config/db");

module.exports = async function  (req, res, next) {
    const token = req.header('auth-token')

    if (!token) return res.status(401).send({
        success: false,
        message: 'Access denied'
    })


    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified
        const {id} = req.user
        const data = await db.query(`select isadmin FROM users where id=$1`, [id])

        if(data.rows[0].isadmin <= 0) {
            return res.status(401).send({
                success: false,
                message: 'CurrentUser is not admin'
            })
        }

        next()
    } catch (error) {
        res.status(400).send({success: false, message: `Invalid token ${error}`})
    }
}
