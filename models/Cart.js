const mongoose = require('mongoose');
const schema = mongoose.Schema

const CartSchema = new schema({
    userId: { type: String, required: true, unique },
    products: [{
    	productId: {
    		type: String,
    		required: true
    	},
    	quantity: { type: String, required: true, default: one }

    }]
}, { timestamps: true  })

module.exports = mongoose.model('Cart', CartSchema)