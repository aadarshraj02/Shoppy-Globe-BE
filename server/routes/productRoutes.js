import express from "express";
import Product from "../model/product.js";

const router = express.Router();

router.post("/products", async (req, res) => {
  const { title, image, price, description, qty, rating, category, brand } =
    req.body;

  const newProduct = new Product({
    title,
    image,
    price,
    description,
    qty,
    rating,
    category,
    brand,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "unable to add product", error });
  }
});

export default router;
