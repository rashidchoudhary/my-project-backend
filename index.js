import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./routes/book.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/my_first_data_base", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("connected", () => console.log("Database Connected ~"));

connection.on("error", (error) => console.log("Database Error: ", error));

app.use("/book", bookRouter);

app.listen(9999, () => {
  console.log("Server is running on port 9999");
});
