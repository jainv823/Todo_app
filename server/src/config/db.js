import mongoose from "mongoose"

const uri = process.env.MONGODB_URI
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(uri, clientOptions);
        console.log(`Connected to MongoDB:${connection.connection.host}`);       
    } catch (error) {
        console.error(`Error while connecting to MongoDB: ${error}!`);
        process.exit(1);
    }
}

export default connectDB;
