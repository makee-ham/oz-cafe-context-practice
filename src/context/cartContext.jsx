import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (options, quantity, id) => {
    setCart([...cart, { options, quantity, id }]);
  };

  const deleteCart = (id) => {
    setCart(cart.filter((el) => id !== el.id));
  };

  return (
    <cartContext.Provider value={{ cart, setCart, addToCart, deleteCart }}>
      {children}
    </cartContext.Provider>
  );
}

export const useCart = () => useContext(cartContext);
