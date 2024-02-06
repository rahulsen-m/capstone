import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // when productToAdd has a match in cartItems array
  const existingCartItem = cartItems.find(
    (cartitem) => cartitem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartitem) =>
      cartitem.id === productToAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }
  // we are returning a new array which have the previous cart items
  //and with that we are adding a new one (productToAdd) with quantity.
  //Means the product to add does not matched with the cart item array
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const ShoppingCartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCard: () => {},
  cartTotal: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCard = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCard,
    cartTotal,
    removeItemFromCart,
    clearItemFromCart,
  };

  useEffect(() => {
    let total = 0;
    cartItems.map((cartItem) => {
      return (total = total + cartItem.price * cartItem.quantity);
    });
    setCartTotal(total);
  }, [cartItems]);

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
