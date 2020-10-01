const { Router } = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

const { userChecks, userValidationHandler } = require('../lib/validator')
const router = Router()

const secret = config.get('JWT_SECRET')
const saltRounds = 10

router.post("/login", userChecks,
    (req, res, next) => {
        userValidationHandler(req, next)
        const { email, password } = req.body

        User.findOne({ email }).then((user) => {
            if (user) {
                bcrypt.compare(password, user.password).then((successfull) => {
                    if (successfull) {
                        const token = jwt.sign(
                            { userId: user._id },
                            secret,
                            { expiresIn: "1h" })
                        res.status(200).json({ userId: user._id, token })
                    } else {
                        next({ status: '401', message: "Wrong email or password" })
                    }
                })
            } else {
                next({ status: '404', message: "User is not exists" })
            }
        })
    })

router.post("/me", (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        next({ status: "401", message: "Unauthorized" })
    } else {
        let decryptedUserId;
        try {
            decryptedUserId = jwt.verify(token, secret).userId
        } catch (err) {
            next({ status: "401", message: err })
        }

        User.findById(decryptedUserId).then((user) => {
            next({ status: "200", message: `${user.email} verified` })
        })
    }
})

router.post("/register", userChecks,
    (req, res, next) => {
        userValidationHandler(req, next)
        const { email, password } = req.body

        User.findOne({ email }).then((user) => {
            if (user) {
                next({ status: "400", message: `Registration error` })
            } else {
                bcrypt.hash(password, saltRounds).then((hashedPassword) => {
                    User.create({ email, password: hashedPassword }).then((user) => {
                        res.status(200).json(user)
                    })
                })
            }
        })
    })

module.exports = router