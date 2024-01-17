const express = require('express');
const cors = require('cors');
const registerModel = require('./models/registerModel')
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;


app.post('/register',async(req,res)=>{
    const {name,email,password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password,10)
    try {
        const registerData = new registerModel({
            name,email,pass
        });
        console.log(name,email,password);
        const registerSave = await registerData.save();
        res.json("Registered Successfully");
    } catch (error) {
        console.log("Error registering");
    }
})

app.post('/login', async(req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await registerModel.findOne({email: email});
        if(user){
            const pass = bcrypt.compare(password, user.pass);
            if(pass){
                res.json("success");
            }else{
                res.json("Incorrect credentials");
            }
        }else{
            res.json("User not found");
        }
    } catch (error) {
        console.log("Error in logging in: server error");
    }
})


app.listen(3001,()=>{
    console.log(`Server listening on ${port}`);
})
