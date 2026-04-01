const mongoose = require("mongoose")

const customersSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Customers", customersSchema)