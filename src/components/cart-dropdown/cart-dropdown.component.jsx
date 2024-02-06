import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shoppingCart.context";
import { Link } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem cartItem={item} key={item.id} />;
        })}
      </div>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
