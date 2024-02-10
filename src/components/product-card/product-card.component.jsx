import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shoppingCart.context";

const ProductCard = ({ product }) => {
  console.log(product);
  const { name, imageUrl, price } = product;
  const { addItemToCard } = useContext(ShoppingCartContext);

  const addProductToCart = () => addItemToCard(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" type="button" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
