import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return <cartContext value={(cart, setCart)}>{children}</cartContext>;
}

export const useCart = () => useContext(cartContext);
