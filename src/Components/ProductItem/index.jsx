import "./ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="item">
      <figure className="product-img">
        <img src="" alt={product.title} />
      </figure>

      <div className="product-info">
        <div className="div-info">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>

        {/* <figure className="icon-cart">
          <img src="" alt="" />
        </figure> */}
      </div>
    </div>
  );
};

export default ProductItem;
