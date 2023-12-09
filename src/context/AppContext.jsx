import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((product) => product.id !== productId));
  };

  return (
    <AppContext.Provider value={{ 
    cart,
    addToCart, 
    removeFromCart
    
    }}>
      {children}
    </AppContext.Provider>
  );
};