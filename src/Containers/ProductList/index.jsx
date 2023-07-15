import { useContext } from "react";

import AppContext from "../../Context";

import ProductItem from "../../Components/ProductItem";

import "./ProductList.css";
import ProductDetail from "../../Components/ProductDetail";

const ProductList = () => {
  const { openProductDetail, items, newItems, filteredValue } =
    useContext(AppContext);

  const HandleProducts = () => {
    if (filteredValue.length == 0) {
      return (
        <>
          {items.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </>
      );
    } else {
      return (
        <>
          {newItems.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </>
      );
    }
  };

  return (
    <section className="product-list">
      <div className="products-container">
        {HandleProducts()}

        {openProductDetail && <ProductDetail />}
      </div>
    </section>
  );
};

export default ProductList;
