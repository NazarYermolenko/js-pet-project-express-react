const jwt = require('jsonwebtoken')
const config = require('config')

const secret = config.get('JWT_SECRET')

function errorHandler(err, req, res, next) {
    res.headers = { "content-type": "application/json" }
    if (err) {
        if (!err.status || !err.message) {
            res.status(res.status).json({ message: `Error raised while exception handling message hasn't been defined ${err}` })
        }
        res.status(err.status).json(err)
    } else {
        next(err)
    }
}

function authorization(req, res, next) {
    const token = req.headers.token
    const auth_url = req.originalUrl.includes("auth")
    if (auth_url) {
        next()
    } else {
        if (token) {
            console.log(jwt.verify(token, secret))
            next()
        } else {
            next({ status: "401", message: "Unauthorized" })
        }
    }
}


module.exports = {
    errorHandler,
    authorization
}