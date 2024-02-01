const express = require("express");
const cors = require("cors");
const registerModel = require("./models/registerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv");
const product = require('./models/products');
const products = require("./models/products");
dotEnv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(password, 10);
  try {
    const registerData = new registerModel({
      name,
      email,
      pass,
    });
    console.log(name, email, password);
    const registerSave = await registerData.save();
    res.json("Registered Successfully");
  } catch (error) {
    console.log("Error registering");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userLog = await registerModel.findOne({ email: email });

  if (userLog) {
    try {
      const isLogUser = await bcrypt.compare(password, userLog.pass);
      if (isLogUser) {
        const token = jwt.sign(userLog.toJSON(), process.env.SECRET_KEY);
        console.log(token);
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.json({ token: token, message: "success" });
      } else {
        res.json({ message: "wrong credentials" });
      }
    } catch (error) {
      console.log("Error comparing passwords:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.json({ message: "user not registered" });
  }
});

app.post('/add-product', verifyUser ,async(req,res)=>{
  const sellerId = req.user._id;
    const {name,price,stock,hash,img,des}= req.body;
    
    try {
        const user = req.user;
        const brand = user.name;
        if(user){
            const productCreate = new product({
                name,price,stock,hash,img,des,brand, sellerId
            });
            const productSave = await productCreate.save();
            res.json("Product Added Successfully")
        }else{
            console.log("Cannot validate user");
        }
    } catch (error) {
        console.log("Internal server error");
    }
})

const mongoose = require('mongoose');

app.post('/get-seller-products', verifyUser, async (req, res) => {
  const user = req.user;
  try {
    if (user) {
      const userId = await registerModel.findOne({ _id: user._id });
      const cartItems = await products.find({ sellerId: userId._id.toString() });
      res.json(cartItems);
    }
  } catch (error) {
    console.log("Internal server error", error);
    res.status(500).json({ error: "Internal server error" });
  }
});





function verifyUser(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      console.log(token);
      if (err) {
        res.status(401).json({ error: "Token verification failed" });
      } else {
        currentUser = user;
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Authorization header missing" });
  }
}

app.listen(3001, () => {
  console.log(`Server listening on ${port}`);
});
