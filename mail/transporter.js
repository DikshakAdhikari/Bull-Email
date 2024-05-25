const nodemailer= require('nodemailer')
const dotenv= require('dotenv')
dotenv.config()


const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  //checking connection
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mail server is running...");
  }
});


module.exports= transporter