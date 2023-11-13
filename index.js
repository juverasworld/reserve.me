import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authrouter from "./routes/auth.js ";
import usersrouter from "./routes/users.js ";
import hotelsrouter from "./routes/hotels.js ";
import roomsrouter from "./routes/rooms.js ";

const app = express()
dotenv.config()

const connect = async()=>{

    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Life is all about processes")
    } catch(error) {
        throw(error);
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected");
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected");
})

app.get("/", (req,res)=>{
    res.send("hello first request")
})

//middlewares
app.use(express.json())
app.use( "/api/auth", authrouter )
app.use( "/api/users", usersrouter )
app.use( "/api/rooms", roomsrouter )
app.use( "/api/hotels", hotelsrouter )


app.use((err,req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong"

    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})
app.listen(8800, ()=>{
    connect() 
    console.log("i am connected to a big backend serverss")
} )  