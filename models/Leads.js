const mongoose = require('mongoose');
const schema = mongoose.Schema;

const LeadsSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    contactName: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    sales: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Leads', LeadsSchema);