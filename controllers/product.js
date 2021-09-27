const Product = require('../models/Products')

const newProduct = async (req, res) => {
    const newProduct = new Product(req.body)

    try {
        const savedProducts = await newProduct.save()
        res.status(200).json(savedProducts)
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateProduct = async (req, res) => {
    try {
        const udatedProduct = new Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true })
        res.status(200).json(udatedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
}

const removeProduct = async (req, res) => {
    try {
        await newProduct.findByIdAndDelete(req.params.id)
        res.status(200).json('product deleted successfully')
    } catch (err) {
        res.status(500).json(err)
    }
}

const getSigleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err)
    }
}

// search for a product
const searchProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getAllProducts = async (req, res) => {
    const qNew = req.query.category

    try {
        let products

        if (qNew) {
            products = await Product.find().sort({ createAt: -1 }).limit(1)
        } else if (qCategory) {
            products = await Product.find({
                categories: { 
                    $in: [qCategory]
                }
            })
        } else {
            products = await Product.find()
        }

        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    newProduct,
    updateProduct,
    removeProduct,
    getSigleProduct,
    searchProduct,
    getAllProducts,
}