import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

   // Create
   const addToCart = (product, size, qty) => {
    setCart((currentCart) => [...currentCart, {product, size, qty}]);
  };

  // Read
  const getCart = () => cart;

  // Update
  const updateCartItem = (productId, size, qty) => {
    setCart((currentCart) => {
      return currentCart.map((item) => 
        item.product.id === productId 
          ? {product: item.product, size, qty} 
          : item
      );
    });
  };

   // Delete
   const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.product.id !== productId));
  };

 

  return (
    <AppContext.Provider value={{ 
      cart,
       addToCart,
        getCart,
         updateCartItem,
          removeFromCart
    
    }}>
      {children}
    </AppContext.Provider>
  );
};