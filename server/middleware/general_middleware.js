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

module.exports = {
    errorHandler
}