const User = require('../models/User')

/** update an existing user */
async const updateUser = (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, { new: true } 
        )

        res.status(200).json(updatedUser)
    } 
    
    catch (err) {
        res.status(500).json(err)
    }
}

/** remoe user from the database */
async const deleteUser = (req, res) => {
    try {
        await User.findByIdAndDelete(res.params.id)
        res.status(200).json('user had been deleted')
    }

    catch (err) {
        res.status(500).json(err)
    }
}

async const findUser = (req, res) => {
    try {
        //!
        // const user = await user.findById({ req.user.id })
        const { password, ...others } = user._doc

        res.status(200).json(others)
    }

    catch (err) {
        res.status(500).json(err)
    }
}

async const getAllUsers = (req, res) => {
    const query = req.query.new

    try {
        const user = query ? await User.find({ _id: -1 }).limit(5) : await User.find()
    }

    catch (err) {
        res.status(500).json(err)
    }
}


async const getStats = (req, res) => {
    const date = Date()
    const lastYear = new Date(date.setFullYear() - 1)

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear }}},
            { 
                $project: { 
                    month: { $month: '$ceatedAt' }
                }
            },
            { 
                $group: { 
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ])

        res.status(200).json(data)
    }

    catch (err) {
        res.status(500).json(err)
    }
} 
module.exports = {
    getAllUsers,
    findUser,
    deleteUser,
    updateUser,
}