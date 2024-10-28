import express from "express";
import {
  addItemToCart,
  getUserCart,
  updateCartItem,
  removeCartItem,
} from "../controllers/cartController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authenticateUser);

router.post("/", addItemToCart);

router.get("/", getUserCart);

router.put("/:id", updateCartItem);

router.delete("/:id", removeCartItem);

export default router;
