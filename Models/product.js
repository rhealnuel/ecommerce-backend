const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    type: String,
    name: String,
    fit: String,
    price: Number,
    images: [String],
    instock: Boolean,
    features: [String],
    sizes: [String],
    joinlife: String,
    material: String,
},
{
    timestamps: true
}
);

const productModel = mongoose.model("product", productSchema)

module.exports = productModel;