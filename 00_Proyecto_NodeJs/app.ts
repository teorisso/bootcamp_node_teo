import express from "express";
import cookieParser from "cookie-parser";
import dbConnect from "./db/dbConnect";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";

dotenv.config();

const PORT = parseInt(process.env.PORT ?? "3000", 10);
const HOST = process.env.HOST ?? "localhost";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors());

app.use("/api", router);

dbConnect();

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
