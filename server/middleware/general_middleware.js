const jwt = require('jsonwebtoken')
const config = require('config')

const secret = config.get('JWT_SECRET')

function errorHandler(err, req, res, next) {
    res.headers = { "content-type": "application/json" }
    if (err) {
        if (!err.status || !err.message) {
            res.status(res.status).json({ message: `Unexpected error` })
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
            jwt.verify(token, secret, (err)=> {
                if(err){
                    next({status:"401", message: err.message})
                }
            })
            next()
        } else {
            next({ status: "401", message: "Token doesn't presented" })
        }
    }
}


module.exports = {
    errorHandler,
    authorization
}