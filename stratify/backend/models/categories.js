const mongoose = require("mongoose")

const categoriesSchema = new mongoose.Schema({
    id: String,
    name: String,
    productsId: {
        type: Object,
        default: {}
    }, 
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Categories", categoriesSchema)