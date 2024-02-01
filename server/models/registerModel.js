const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://reiine:testpass@cluster0.u7inkuy.mongodb.net/trezData')
.then(()=>{
    console.log("Mongoose connected");
})
.catch((err)=>{
    console.log("Error connecting to Mongo");
})

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
})

const registerModel = new mongoose.model('seller-users',registerSchema);
module.exports = registerModel;