import { createContext, useContext } from "react";
import data from "../assets/data";

const menuContext = createContext();

export function MenuProvider({ children }) {
  return (
    <menuContext.Provider value={{ menu: data.menu }}>
      {children}
    </menuContext.Provider>
  );
}

export const useMenu = () => useContext(menuContext);
