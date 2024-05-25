const mongoose= require('mongoose')
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

module.exports= userModel