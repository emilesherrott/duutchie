import mongoose from 'mongoose'
import app from "./app.js"
// import { port, dbURI } from './config/environment.js'
import dotenv from 'dotenv'
dotenv.config()



const connectDB = async () => {
    console.log(process.env.DB_URI)
    try {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.set('strictQuery', false) 
    console.log("MongoDB is connected")
    } catch (err) {
        console.log("MongoDB failed to connect")
    }
}

connectDB()


app.listen(process.env.PORT, () => console.log(`App up and running on port ${process.env.PORT}`))