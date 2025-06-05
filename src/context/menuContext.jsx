import { createContext, useContext } from "react";
import data from "../assets/data";

const menuContext = createContext();

export function MenuProvider({ children }) {
  const menu = data.menu;

  return <menuContext value={menu}>{children}</menuContext>;
}

export const useMenu = () => useContext(menuContext);
