const mongoose = require('mongoose')
const schema = mongoose.schema

const UserSchema = new schema({
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
    isAdmin: { type: Boolean, require: true, default: false }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)