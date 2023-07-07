import { useContext } from "react";
import useGetProducts from "../../Hooks/useGetProducts";

import ProductItem from "../../Components/ProductItem";

import "./ProductList.css";
import AppContext from "../../Context";

const ProductList = () => {
  const { allProducts, setAllProducts, filteredProduct } =
    useContext(AppContext);

  const products = useGetProducts();

  setAllProducts(products);

  console.log(filteredProduct);

  return (
    <section className="product-list">
      <div className="products-container">
        {allProducts.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
