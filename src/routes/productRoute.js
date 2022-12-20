const express=require("express")
const { createProduct, getProduct, getProductsById, updateProduct, deleteProduct } = require("../controllers/productController")

const router=express.Router()

router.route("/products").post(createProduct).get(getProduct)

router.route("/products/:productId").get(getProductsById).put(updateProduct).delete(deleteProduct)

module.exports=router;