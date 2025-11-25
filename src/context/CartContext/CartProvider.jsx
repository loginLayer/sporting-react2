import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  const addItem = (item) => {
    if (exists(item.id)) {
      alert("El producto ya existe en el carrito");
      return;
    }
    setCart([...cart, item]);
    const itemName = item.name || "Producto";
    alert(`Agregaste al carrito:\n${itemName}`);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const values = {
    cart,
    addItem,
    clearCart,
    getTotalItems,
    removeItem,
    getTotalPrice,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
