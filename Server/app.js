import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import dbConfig from "./config/dbConfig.js";
import { handleError, notFound } from "./middlewares/errorHandlerMiddleware.js";
import router from "./routes/index.js";
dotenv.config();
// Create express app
const app = express();
// Connect to the database
await dbConfig();
const port = process.env.PORT;

//CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path}`, req.headers);
//   next();
// });

app.use(cors(corsOptions));


//middleware to parse json
app.use(express.json());
//middleware to parse urlencoded data
app.use(express.urlencoded({ extended: true }));
//middleware to parse cookies
app.use(cookieParser());

// Create a simple route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//main router
app.use(router);

// Error handling middleware
app.use(notFound);

app.use((err, req, res, next) => {
  handleError(err, res);
});

// Start the express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
