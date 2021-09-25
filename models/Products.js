const mongoose = require('mongoose');
const schema = mongoose.Schema

const ProductScema = new schema({
    title: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    img : { type: String, require: true },
    categories: { type: Array },
    size: { type: String, require: true },
    colors: { type: String },
    price: { type: Numbr, require: true },
}, { timestamps: true })

module.exports = mongoose.model('Product', ProductScema)