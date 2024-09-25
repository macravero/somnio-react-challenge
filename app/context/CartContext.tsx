'use client'
import { createContext, ReactNode, useContext, useState } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }
  
interface CartItem extends Product {
  quantity: number;
}
  
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
}
  
interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
  
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
