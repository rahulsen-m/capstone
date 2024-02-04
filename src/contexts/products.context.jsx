import SHOPDATA from "../shop-data.json";
import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  //setProducts: null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOPDATA);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
