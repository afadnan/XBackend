import express from "express";
import connect from "./config/database.js";
const app = express ();

app.listen(3000,async()=>{
    console.log("server is running on port 3000");
    //mongo db connection establish
    connect();
    //create a schema->blueprint



    //create a model->character that we define in the model

    //create a document
    console.log("Mongo database connected");
    
});