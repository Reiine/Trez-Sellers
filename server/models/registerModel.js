const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/trez-sellers')
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

const registerModel = new mongoose.model('users',registerSchema);
module.exports = registerModel;