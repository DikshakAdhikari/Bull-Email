const express= require('express')
const { createUser, sendEmails } = require('../controllers/userController')
const userRouter= express.Router()

userRouter.post('/',  createUser)

userRouter.get('/sendEmails', sendEmails)


module.exports= userRouter