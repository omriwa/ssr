var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
    
var userSchema = new Schema({
    username: String,
    name: String,
    lastName: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User',userSchema);