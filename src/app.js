const express=require("express");
const multer = require("multer");
const User=require("./routes/userRoute")
const Product=require("./routes/productRoute")
const Cart=require("./routes/cartRoute")
const Order=require("./routes/orderRoute")
const app = express();

app.use(express.json());
const upload = multer();
app.use(upload.any());

app.use(User)
app.use(Product)
app.use(Cart)
app.use(Order)


module.exports=app