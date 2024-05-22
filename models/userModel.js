import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    }
})

const userModel= new mongoose.model("userm", userSchema)

export default userModel