const { userChecks } = require("./user_validator/user.checks")
const { userValidationHandler} = require("./user_validator/user.validation.handler")

module.exports = {
    userChecks,
    userValidationHandler
}