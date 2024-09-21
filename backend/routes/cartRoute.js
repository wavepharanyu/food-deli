import express from 'express'
import { addToCart, removeFromCart, getCart, clearFromCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js"

const cartRouter = express.Router()

cartRouter.post("/add", authMiddleware, addToCart)
cartRouter.post("/remove", authMiddleware, removeFromCart)
cartRouter.post("/clear", authMiddleware, clearFromCart)
cartRouter.post("/get", authMiddleware, getCart)

export default cartRouter