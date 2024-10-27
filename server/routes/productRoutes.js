import express from "express";
import Product from "../model/product.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

router.get("/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
});

router.post("/product", async (req, res) => {
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
