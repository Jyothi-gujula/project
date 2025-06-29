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
const port = process.env.PORT || 4000;

connectDB();

// Enhanced CORS configuration for mobile compatibility
app.use(cors({
  origin: "*", // Allow all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH', 'HEAD'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'x-auth-token', 
    'Origin', 
    'Accept',
    'X-Requested-With',
    'Cache-Control',
    'Pragma'
  ],
  exposedHeaders: ['Content-Length', 'X-Requested-With'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));

// Test route to verify deployment
app.get("/test", (req, res) => {
  return res.status(200).json({ 
    message: "Test endpoint working!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    userAgent: req.headers['user-agent']
  });
});

app.use("/api/v1", authenticate, transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ 
    message: "Financial Manager API is running!",
    userAgent: req.headers['user-agent']
  });
});

app.use(errorHandler); // Global error handling

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
