import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // Use environment variable for MongoDB URL in production
        const url = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/finmanager";
        const {connection} = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connection successful to ${connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
}