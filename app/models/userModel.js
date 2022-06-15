const mongoose = require('mongoose')

const User = mongoose.model('User', {
    email: String,
    password: String,
    status: Number
})

module.exports = Message