const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String, required:true, minlenngth: 3, maxlegngth:50 },
    email:{type:String, required:true, minlenngth: 3, maxlegngth:100 },
    password:{type:String, required:true, minlenngth: 6, maxlegngth:200 },
    createdAt:{type: Date, default: Date.now}
    
})

module.exports = mongoose.model('User',userSchema);