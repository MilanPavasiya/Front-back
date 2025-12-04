// require("dotenv").config({ path: "/.env" }); or
import dotenv from "dotenv";
import connectDb from "./database/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => app.listen(process.env.PORT || 8000, () => console.log(`server is running on port : ${process.env.PORT}`))
  .catch((e) => {
    console.log("MongoDB connection failed", e);
  })

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
})();
*/
