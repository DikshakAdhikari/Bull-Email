import express from 'express'
import { createUser, sendEmails } from '../controllers/userController.js'

const userRouter= express.Router()

userRouter.post('/', createUser)

userRouter.get('/sendEmails', sendEmails)

export default userRouter