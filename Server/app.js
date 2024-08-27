import dotenv from "dotenv";
import express from "express";
import dbConfig from "./config/dbConfig.js";
import songRouter from "./routes/songRoutes.js";
import { handleError, notFound } from "./middlewares/errorHandlerMiddleware.js";
dotenv.config();
// Create express app
const app = express();
const port = process.env.PORT;

//middleware to parse json
app.use(express.json());

//middleware to parse urlencoded data
app.use(express.urlencoded({ extended: true }));

// Connect to the database
await dbConfig();

// Create a simple route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Use the song router
app.use("/api/songs", songRouter);

// Error handling middleware
app.use(notFound);

app.use((err, req, res, next) => {
  handleError(err, res);
});

// Start the express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
