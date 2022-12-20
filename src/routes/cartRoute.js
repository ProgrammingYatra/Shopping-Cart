const express=require("express");
const { createCart, updateCart, getCart, deleteCart } = require("../controllers/cartController");
const { authentication, authorization } = require("../middlewares/auth");

const router=express.Router();

router.route("/users/:userId/cart").post(authentication,authorization,createCart).put(authentication,authorization,updateCart).get(authentication,authorization,getCart).delete(authentication,authorization,deleteCart);

module.exports=router;