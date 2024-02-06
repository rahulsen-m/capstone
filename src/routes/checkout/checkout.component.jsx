import { useContext, useEffect } from "react";
import "./checkout.styles.scss";
import { ShoppingCartContext } from "../../contexts/shoppingCart.context";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const { cartItems, cartTotal, setIsCartOpen } =
    useContext(ShoppingCartContext);
  useEffect(() => {
    setIsCartOpen(false);
  }, []);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} checkoutItem={cartItem} />;
      })}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default CheckOut;
