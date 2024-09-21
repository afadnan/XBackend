import express from "express";
import connect from "./config/database.js";
import Tweet from "./model/tweet.js";
import Hashtag from "./model/hashtag.js";
const app = express ();

app.listen(3000,async()=>{
    console.log("server is running on port 3000");
    //mongo db connection establish
    connect();
    //create a schema->blueprint



    //create a model->character that we define in the model

    //create a document
    console.log("Mongo database connected");

    // Tweet.create({
    //     content : "This is my first tweet",
    //     likes : 23,
    //     noOfRetweets : 7,
    //     comment :"This is my first comment"
    // })

    Hashtag.create({
        text:"travel",
        tweets:[`66ec43dfd33174eb2d9b63e8`]
    })
})