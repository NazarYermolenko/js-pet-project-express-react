const { Schema, model } = require('mongoose')

const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    lastActive: {
        type: Date,
        required: false
    }
})

module.exports = model('User', schema)