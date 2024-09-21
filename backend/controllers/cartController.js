import userModel from './../models/userModel.js';

// add item to cart
const addToCart = async(req,res) => {
    try {
        const { userId, itemId } = req.body
        let userData = await userModel.findById(userId)
        let cartData = await userData.cartData
        if(!cartData[itemId]){
            cartData[itemId] = 1
        }else{
            cartData[itemId] += 1
        }
        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Added to Cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// remove item from cart
const removeFromCart = async(req,res) => {
    try {
        const { userId, itemId } = req.body
        let userData = await userModel.findById(userId)
        let cartData = await userData.cartData
        if(cartData[itemId] > 0){
            cartData[itemId] -= 1
        }
        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Removed from Cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// clear item from cart
const clearFromCart = async(req,res) => {
    try {
        const { userId, itemId } = req.body
        let userData = await userModel.findById(userId)
        let cartData = await userData.cartData
        if(cartData[itemId] > 0){
            cartData[itemId] = 0
        }
        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Cleared from Cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// fetch user cart data
const getCart = async(req,res) => {
    try {
        const { userId } = req.body
        let userData = await userModel.findById(userId)
        let cartData = await userData.cartData
        res.json({ success: true, cartData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

export { addToCart, removeFromCart, getCart, clearFromCart }