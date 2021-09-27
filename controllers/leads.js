const Leads = require('../models/Leads')

const updateLead = async (req, res) => {
    try {
        const updatedLead = await Lead.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedLead)
    } catch (err) {
        res.status(500).json(err)
    }
}

const removeLead = async (req, res) => {
    try {
        await Lead.findByIdAndRemove(req.params.id)
        res.status(200).json('lead was deleted')
    } catch (err) {
        res.status(500).json(err)
    }
}

const searchLead = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id)
        const { password, ...other } = lead._doc

        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getAllLeads = async (req, res) => {
    const query = req.query.new

    try {
        const lead = query ? await Lead.find().sort({ _id: -1 }).limit(5) : await Lead.find()
        res.status(200).json(lead)
    } catch (err) {
        res.status(500).json(err)
    }
}

// todo: customize this function to draw out things like status of a lead
const stats = async (req, res) => {
    return [req, res][0];
}

module.exports = {
    updateLead,
    removeLead,
    searchLead,
    getAllLeads,
    
}