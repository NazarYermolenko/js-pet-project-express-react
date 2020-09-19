const { check } = require('express-validator')

const userChecks = [
    check('email', "Is not exists or wrong").exists().isEmail(),
    check('password', "Is not exists or less than 8 symbols").exists().isLength({ min: 8 })
]

module.exports = {
    userChecks
}