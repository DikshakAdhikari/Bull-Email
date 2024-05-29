const sendEmail = require("../mail/sendEmail");

const processEmail= async(job,done)=> {
   
//  console.log(job.data);
 const {name,email}= job.data.val
//  console.log(name, email);
    await sendEmail({
        name,email
    })
 done()
}

module.exports= processEmail
