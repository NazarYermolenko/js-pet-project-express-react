function errorHandler(err, req, res, next) {
    res.headers = { "content-type": "application/json" }
    if (err) {
        if(!err.status || !err.message){
            res.status(500).json({message: "Error raised while exception handling message hasn't been defined"})
        }
        res.status(err.status).json(err)
    }
    next(err)
}

module.exports = {
    errorHandler
}