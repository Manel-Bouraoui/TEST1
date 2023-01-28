import express from "express";
import  dotenv  from "dotenv";
import mongoose from "mongoose" ;
import cookieParser from "cookie-parser";
import usineRoute from "./routes/usines.js";
import machinesRoute from "./routes/machines.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";

const app = express()
dotenv.config()

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });


//midllewares

app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/usine", usineRoute);
app.use("/api/machines", machinesRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});



app.listen(8800,()=>{
    connect()
    console.log("Connected to back end !");
})

mongoose.set('strictQuery', true);