const mongoose = require ("mongoose");

const shoppingSchema = mongoose.Schema({
    name: {type:String},
    createdAt: {type:Date}
})

const Shopping = mongoose.model('Shopping', shoppingSchema);
module.exports = Shopping;