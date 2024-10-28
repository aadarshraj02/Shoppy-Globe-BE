import express from "express";
import dotenv from "dotenv";
import connectDB from "./connection.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
