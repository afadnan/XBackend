import mongoose from "mongoose";

const connect = async () => {
    await mongoose.connect("mongodb+srv://afadnan23:afadnan23@xproject.o64x8.mongodb.net/");
}

export default connect;