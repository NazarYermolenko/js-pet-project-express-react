function errorHandler(err, req, res, next) {
    req.headers = { "content-type": "application/json" }
    if (err) {
        console.error(err)
        res.status(500).json({"message": err})
    }
    next()
}

module.exports = {
    errorHandler
}