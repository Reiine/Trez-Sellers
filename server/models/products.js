const mongoose = require('mongoose');
const dotEnv = require("dotenv");
dotEnv.config();
mongoose.connect(`mongodb+srv://reiine:testpass@cluster0.u7inkuy.mongodb.net/trezData`)
.then(()=>{
    console.log("mongoose connected")
}).catch((e)=>{
    console.log("can't connect to mongoose",e);
})

const prod = new mongoose.Schema({
    sellerId : {
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
    },
    hash:{
        type:Array,
        required:true
    },
    tag:{
        type:String,
    },
    des:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const products = new mongoose.model('products', prod);

module.exports=products;