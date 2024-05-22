import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.js'
import connectDB from './connection/connect.js'
dotenv.config()
import transporter from './controllers/transporter.js'
connectDB()
const app= express()
app.use(express.json())

app.use('/user', userRouter)

app.listen(process.env.PORT || 5000, ()=> {
    console.log(`Server listening on port ${process.env.PORT}`);
})
