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

/** 
https://accounts.goolge.com/o/oauth2/auth
client_id=676006399919-7c8cvqilcd1lec74kh5jak75itp34hkf.apps.googleusercontent.com
redirect_uri=http://localhost
response_type=code
scope=https://www.googleapis.com/auth/drive
access_type=offline




https://accounts.google.com/o/oauth2/auth?client_id=676006399919-7c8cvqilcd1lec74kh5jak75itp34hkf.apps.googleusercontent.com&redirect_uri=http://localhost&response_type=code&scope=https://www.googleapis.com/auth/drive&access_type=offline


http://localhost/?code=4/0AdLIrYeWVDJKyGCrBBAOnLIKOzqgTVLoID-VzsLhmT_elaHVw95yk-LCk2fn9Qr3Ss6dtg&scope=https://www.googleapis.com/auth/drive


curl --request POST --data "code=4/0AdLIrYeWVDJKyGCrBBAOnLIKOzqgTVLoID-VzsLhmT_elaHVw95yk-LCk2fn9Qr3Ss6dtg&client_id=676006399919-7c8cvqilcd1lec74kh5jak75itp34hkf.apps.googleusercontent.com&client_secret=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&redirect_uri=http://localhost&grant_type=authorization_code" https://oauth2.googleapis.com/token


"refresh_token": "1//0gc-Z4HOflyFACgYIARAAGBASNwF-L9Ir1lw5wr_hyaoE4z53Ufb7bJlhWAafh8RdJIv9it1HFUy48liRAOQv4ikK0cJhBB0kJKo"

curl --request POST --data "client_id=676006399919-7c8cvqilcd1lec74kh5jak75itp34hkf.apps.googleusercontent.com&client_secret=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&refresh_token=1//0gc-Z4HOflyFACgYIARAAGBASNwF-L9Ir1lw5wr_hyaoE4z53Ufb7bJlhWAafh8RdJIv9it1HFUy48liRAOQv4ikK0cJhBB0kJKo&grant_type=refresh_token" https://oauth2.googleapis.com/token


ya29.a0AXooCgt5vRJH3gs6540VKfzPVboCgMcal9o8jQQw6_I0hhNbl5pcDlUE8aPt0uei5kvqEmii0Jx4ttShVABhJQwi5cZZ8KPUeOlC12n4o0oGhjHlLp1h97Q1VSN-AmQx0hgE64tjAUQfpfN9_Lua3oZgA0XcKQ4uHXsEaCgYKATcSARISFQHGX2MicE0D8xlu3BiGQ47-hS25Yw0171
 


 **/