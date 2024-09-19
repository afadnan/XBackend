import mongoose from "mongoose";
//Schema
const tweetSchema = new mongoose.Schema({
    content : {
        type:String
    },
    likes : {
        type: Number
    },
    noOfRetweets : {
        type: Number
    },
    comment : {
        type:String
    }
});
//Model -> always start with capital letter
const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;

