import mongoose from "mongoose";
import dotenv from "dotenv";

// Load the environment variables
dotenv.config();

// Get the database url from the environment variables
const url = process.env.MONGODB_URI;

// Connect to the database function
const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.log("Error connecting to the database: ", error);

    // Exit the process if the connection fails
    process.exit();
  }
};

// Export the connect function
export default connect;
