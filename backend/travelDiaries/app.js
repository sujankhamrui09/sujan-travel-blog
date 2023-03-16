import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);


//mongodb+srv://admin:<password>@cluster0.5mb2pjm.mongodb.net/?retryWrites=true&w=majority
// connections...........oMqCjDtF3Kg6DNfv
//mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.5mb2pjm.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.5mb2pjm.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));
