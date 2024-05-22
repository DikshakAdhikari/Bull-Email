import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user'
dotenv.config()

const app= express()

app.use('/user', userRouter)

app.listen(process.env.PORT, ()=> {
    console.log(`Server listening on port ${process.env.PORT}`);
})
