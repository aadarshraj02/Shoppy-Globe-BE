import CartItem from "../model/cart.js";

export const addItemToCart = async (req, res) => {
  const { productId, title, image, price, qty } = req.body;
  const userId = req.user.id;

  try {
    const newItem = new CartItem({
      userId,
      productId,
      title,
      image,
      price,
      qty,
    });
    await newItem.save();
    res
      .status(201)
      .json({ message: "Item added to cart successfully", newItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding item to cart", error: error.message });
  }
};

export const getUserCart = async (req, res) => {
  const userId = req.user.id; 

  try {
    const cartItems = await CartItem.find({ userId });
    res.status(200).json(cartItems);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching cart items", error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  const { id } = req.params; 
  const { qty } = req.body; 

  try {
    const updatedItem = await CartItem.findByIdAndUpdate(
      id,
      { qty },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res
      .status(200)
      .json({ message: "Cart item updated successfully", updatedItem });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating cart item", error: error.message });
  }
};

export const removeCartItem = async (req, res) => {
  const { id } = req.params; 

  try {
    const deletedItem = await CartItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ message: "Cart item removed successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error removing cart item", error: error.message });
  }
};
