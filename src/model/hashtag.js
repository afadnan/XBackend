import mongoose from "mongoose";
//Schema
const hashtagSchema = new mongoose.Schema({
    
});
//Model -> always start with capital letter
const Hashtag = mongoose.model("Hashtag", hashtagSchema);
export default Tweet;

