const express=require("express");
const { updateOrder, createOrder } = require("../controllers/orderController");
const { authentication, authorization } = require("../middlewares/auth");

const router=express.Router();

router.route("/users/:userId/cart").post(authentication,authorization,createOrder).put(authentication,authorization,updateOrder)

module.exports=router;