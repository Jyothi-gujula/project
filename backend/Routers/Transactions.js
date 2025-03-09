import express from "express";
import { authenticate } from "../Middleware/authMiddleware.js";
import {
  addTransactionController,
  deleteTransactionController,
  getAllTransactionController,
  updateTransactionController,
} from "../controllers/transactionController.js";

const router = express.Router();

router.route("/addTransaction").post(authenticate, addTransactionController);
router.route("/getTransaction").post(authenticate, getAllTransactionController);
router
  .route("/deleteTransaction/:id")
  .post(authenticate, deleteTransactionController);
router
  .route("/updateTransaction/:id")
  .put(authenticate, updateTransactionController);

export default router;
