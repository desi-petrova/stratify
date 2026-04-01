const mongoose = require("mongoose")

const articlesSchema = new mongoose.Schema({
    id: String,
    nomenclatureNumber: {
        type: String,
        unique: true,   
        required: true  
    },
    name: String,
    category: String,
    unit: String,
    note: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Articles", articlesSchema)