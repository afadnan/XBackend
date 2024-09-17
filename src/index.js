import express from "express";
import mongoose from "mongoose";
const app = express ();

app.listen(3000,async()=>{
    console.log("server is running on port 3000");
    mongoose.connect(`mongodb+srv://afadnan23:afadnan23@xproject.o64x8.mongodb.net/`);
    console.log("Mongo database connected");
    
});