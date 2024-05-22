import mongoose from "mongoose";

const connectDB= async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB connected successfully!");
    }catch(err){
        throw err
    }
}

export default connectDB