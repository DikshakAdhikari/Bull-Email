const sendEmail = require("../mail/sendEmail");
const userModel = require("../models/userModel");
const Queue= require('bull')

const emailQueue = new Queue("emailQueue", {
    redis: { port: 6379, host: "127.0.0.1" },
  });

  const emptyBullQueue= async()=> {
     await emailQueue.obliterate({ force: true });
        console.log('Queue obliterated');
  }

 const createUser= async(req, res)=> {
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

 const sendEmails= async(req,res)=> {
    try{
        const usersToSendEmails= await userModel.find()
        usersToSendEmails.map((val, index)=> {
            emailQueue.add(
                {usersToSendEmails},{fifo:true, attempts:1, delay:4000}
            ).then(()=> {
                if(index+1 === usersToSendEmails.length){
                    console.log("All users added to queue!");
                    res.json({message:"All users added to queue!"})
                }
            })
        });

        // emptyBullQueue()
   
    }catch(err){
        res.json({message:err})
    }
}

module.exports= {
    createUser,
    sendEmails
}

