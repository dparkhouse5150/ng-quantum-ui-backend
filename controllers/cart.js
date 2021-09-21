const Cart = require('../models/Cart')

async const NewCart = (req, res) => {
    const newCart = new Cart(req.body)

    try {
        savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } 

    catch (err) {
        res.status(500).json(err)
    }
}

async const Update = (req, res) => {
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

async const Delete = (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.param)
    } 

    catch (err) {
        res.status(500).json(err)
    }
}

async const Search = (req, res) => {
    try {
        const Cart = Cart.find({ userId: req.params.userId })
        res.status(200).json(Cart)
    } 

    catch (err) {
        res.status(500).json(err)
    }
}

async const getAll = (req, res) => {
    try {
        const Carts = await Cart.find()
        res.status(200).json(Carts)
    } 

    catch (err) {
        res.status(500).json(err)
    }
}