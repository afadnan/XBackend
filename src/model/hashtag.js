import mongoose from "mongoose";

//Schema
const hashtagSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
        unique:true
    },
    tweets:[
        {
            type:mongoose.Schema.Types.ObjectId
        }
    ]

    
});
//Model -> always start with capital letter
const Hashtag = mongoose.model("Hashtag", hashtagSchema);
export default Hashtag;

