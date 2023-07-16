import { useContext } from "react";

import AppContext from "../../Context";

import ProductItem from "../../Components/ProductItem";

import "./ProductList.css";
import ProductDetail from "../../Components/ProductDetail";

const ProductList = () => {
  const { openProductDetail, items, filteredItems, searchByTitle } =
    useContext(AppContext);

  const HandleProducts = () => {
    if (filteredItems?.length > 0) {
      return filteredItems.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      });
    } else {
      return <div>El producto no existe.</div>;
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
