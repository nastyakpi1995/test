const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('auth-token')

    if (!token) return res.status(401).send({
        success: false,
        message: 'Access denied'
    })

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified
        next()
    } catch (error) {
        res.status(400).send({success: false, message: `Invalid token ${error}`})
    }
}