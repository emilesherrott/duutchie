// import { MongoClient, ServerApiVersion } from 'mongodb'
import mongoose from 'mongoose'
import app from "./app.js"
import { port, dbURI } from './config/environment.js'




const connectDB = async () => {
    // const client = new MongoClient(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
    try {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("Mongo db is connected")
    } catch (err) {
        console.log("fail")
    }
}

connectDB()


app.listen(port, () => console.log(`App up and running on port ${port}`))