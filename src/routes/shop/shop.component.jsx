import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  // console.log("shop component");
  // console.log(categoriesMap["hats"]);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
