import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
const app = express()

app.use(bodyParser.json())
app.use(cors())
dotenv.config();


const Port = process.env.PORT || 8080
const DB_URL = process.env.MONGO_DB

mongoose.connect(DB_URL).then(()=>{

  console.log("DB CONNECTED")

  app.listen(Port , ()=>{
    console.log('port :',Port)
  })

}).catch((error)=>console.log(error))


app.use('/api',userRoutes)