import { sendEmail } from "../mail/sendEmail.js";
import userModel from "../models/userModel.js";


export const createUser= async(req, res)=> {
    try{
        const {name, email}= req.body;
        const userExists = await userModel.findOne({name, email});
        if(userExists){
            return res.json({message:"User exists already!"})
        }
        const user = await userModel.create({ name, email});
        await user.save()
        await sendEmail({name, email})
        res.json({message:"User saved successfully!"})
    }catch(err){
        res.json({message:err})
    }
}

export const sendEmails= async(req,res)=> {
    try{
        const usersToSendEmails= await userModel.find()
        usersToSendEmails.map((val, index)=> {
            
        })
    }catch(err){
        res.json({message:err})
    }
}