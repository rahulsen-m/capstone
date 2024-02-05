import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
