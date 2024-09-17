import express from "express";
import connect from "./config/database.js";
const app = express ();

app.listen(3000,async()=>{
    console.log("server is running on port 3000");
    //mongo db connection establish
    connect();
    //create a schema

    //create a model

    //create a document
    console.log("Mongo database connected");
    
});