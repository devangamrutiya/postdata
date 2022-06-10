var mongoose = require('mongoose');

var studSchema = mongoose.Schema({
    name:String,
    rating:Number
})

module.exports = mongoose.model("movie",studSchema);