"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import API from "@/services/api"; // Assuming you use axios or fetch wrapper

type CartItem = {
  id: number;
  productId: number;
  quantity: number;
  // add more as needed
};

type CartContextType = {
  cart: CartItem[];
  isLoading: boolean;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  isInCart: (productId: number) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) {
        setCart([]);
        return;
      }
      setIsLoading(true);
      try {
        const res = await API.get(`/carts/user/${user.id}`);
        setCart(res.data); // adjust this depending on your dummyjson structure

        console.log(JSON.stringify(res.data) + "GA;DFFFFFFFFFFFFFFFFFD");
      } catch (err) {
        console.error("Failed to load cart", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, [user]);

  const addToCart = async (productId: number) => {
    try {
      const res = await API.post("/carts/add", {
        userId: user?.id,
        products: [{ id: productId, quantity: 1 }],
      });

      // Assume new cart is returned
      setCart(res.data);
    } catch (err) {
      console.error("Error adding to cart", err);
    }
  };

  const removeFromCart = async (productId: number) => {
    try {
      const updatedCart = cart.filter((item) => item.productId !== productId);
      // Optional: make DELETE request to backend
      setCart(updatedCart);
    } catch (err) {
      console.error("Error removing from cart", err);
    }
  };

  const isInCart = (productId: number) => {
    return cart.some((item) => item.productId === productId);
  };

  return (
    <CartContext.Provider
      value={{ cart, isLoading, addToCart, removeFromCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
