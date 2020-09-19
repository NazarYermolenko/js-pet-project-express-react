class AppError extends Error {
    constructor(status, message) {
        super({
            status,
            message
        })
    }
}

module.exports = {
    AppError
}