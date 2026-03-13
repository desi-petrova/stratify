const mongoose = require("mongoose")

const companiesSchema = new mongoose.Schema({
    id: String,
    name: String,
    address: String,
    crn: String,
    vatNumber: String,
    owner: String,
    note: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Companies", companiesSchema)