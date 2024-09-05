import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://pharanyuwave:5nydUM2dTsJelAns@cluster0.kvwu9.mongodb.net/food-del').then(() => console.log("DB Connected"))
}