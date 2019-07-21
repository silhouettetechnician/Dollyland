const mongoose = require('mongoose')

const productSchema = 
new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true},
    description: { type: String, required: true },
    material: { type: String, required: true },
    gender: { type: String, required: true },
    size: { type: String },
    price: { type: Number, required: true },
    images: { type: Array },
    accessories: { type: Array }
})

module.exports = mongoose.model('Product', productSchema)
