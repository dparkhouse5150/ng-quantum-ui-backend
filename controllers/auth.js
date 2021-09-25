const User = require('../models/User')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

async const register = (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: crypto.AES.encrypt(req.body.password, process.env.PASS_SEC)
    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
}

async const login = (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json('wrong credentials')

        const hashedPassword = CryptoJS.AES.decrypt(req.body.password, process.env.PASS_SEC)
        OriginalPassword !== req.body.password && res.status(401).json('wrong password')

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SEC, { expiresIn: '3d' })
        
        const { hashedPassword, ...other } = user._doc
        res.status(200).json({ ...other, accessToken })
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    register,
    login
}