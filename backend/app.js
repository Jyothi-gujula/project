import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./DB/Database.js";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import { authenticate } from "./Middleware/authMiddleware.js";
import { errorHandler } from "./Middleware/errorMiddleware.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const app = express();
const port = 4000;

connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", authenticate, transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello" });
});

app.use(errorHandler); // Global error handling

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
