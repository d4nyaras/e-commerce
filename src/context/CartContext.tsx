"use client";

import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import API from "@/services/api";

const CartContext = createContext<any | undefind>(undefined);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    console.log(JSON.stringify(user) + " this is user id");
  }, [user]);

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
