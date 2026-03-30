import express from "express";
import mongoose from "mongoose";
import indexRouter from "./routes/index.js";

const app = express();

app.use('/api', express.json());
app.use('/api', indexRouter);
 
app.listen(4500, () => {
    console.log("Server started on port 4500");
});