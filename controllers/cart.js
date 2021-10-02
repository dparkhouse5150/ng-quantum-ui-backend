const Cart = require('../models/Cart')

const NewCart = async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } 

    catch (err) {
        res.status(500).json(err)
    }
}

const Update = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )

        res.status(200).json(updatedCart)
    } 

    catch (err) {
        res.status(500).json(err)
    }
}

const Delete = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.param)
    } 

    catch (err) {
        res.status(500).json(err)
    }
}

const Search = async (req, res) => {
    try {
        const Cart = Cart.find({ userId: req.params.userId })
        res.status(200).json(Cart)
    } 

    catch (err) {
        res.status(500).json(err)
    }
}

const getAll = async (req, res) => {
    try {
        const Carts = await Cart.find()
        res.status(200).json(Carts)
    } 

    catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    getAll,
    Search,
    Delete,
    Update,
    NewCart
}