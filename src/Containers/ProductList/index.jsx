import { useContext, useEffect, useState } from "react";

import ProductItem from "../../Components/ProductItem";

import "./ProductList.css";

const ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productList = [
      {
        id: 1,
        title: `Product 1`,
        price: 100,
        description: `Product description 1`,
      },
      {
        id: 2,
        title: `Product 2`,
        price: 200,
        description: `Product description 2`,
      },
      {
        id: 3,
        title: `Product 3`,
        price: 300,
        description: `Product description 3`,
      },
      {
        id: 4,
        title: `Product 4`,
        price: 400,
        description: `Product description 4`,
      },
      {
        id: 5,
        title: `Product 5`,
        price: 500,
        description: `Product description 5`,
      },
      {
        id: 6,
        title: `Product 6`,
        price: 600,
        description: `Product description 6`,
      },
    ];

    setItems(productList);
  }, []);

  return (
    <section className="product-list">
      <div className="products-container">
        {items.map((product) => {
          return <ProductItem key={product.title} product={product} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
