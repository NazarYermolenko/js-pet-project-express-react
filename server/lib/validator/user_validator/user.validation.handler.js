const { validationResult } = require('express-validator')

function userValidationHandler(request_data, next) {
    const errors = validationResult(request_data)

    if (!errors.isEmpty()) {
        next({ status: '400', message: errors.array().map((error) => { return { parameter: error.param, message: error.msg } }) })
    }
}

module.exports = {
    userValidationHandler
}