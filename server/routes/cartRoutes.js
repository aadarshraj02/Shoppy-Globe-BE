import express from "express";
import {
  addCartItem,
  getUserCart,
  updateCartItem,
  removeCartItem,
} from "../controllers/cartController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authenticateUser);

router.post("/", addCartItem);

router.get("/", getUserCart);

router.put("/:id", updateCartItem);

router.delete("/:id", removeCartItem);

export default router;
