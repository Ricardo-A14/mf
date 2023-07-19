import { useContext } from "react";
import AppContext from "../../Context/index";

import "./ProductDetail.css";

const ProductDetail = () => {
  const { setOpenProductDetail, productDetails } = useContext(AppContext);

  return (
    <aside className="product-detail">
      <div
        className="close-product-detail"
        onClick={() => setOpenProductDetail(false)}
      >
        x
      </div>
      <figure className="product-detail-img">
        <img src={productDetails.image} alt="dfj" />
      </figure>
      <div className="aside-product-info">
        <span>{productDetails.title}</span>
        <span>{productDetails.price}</span>
        <span>{productDetails.description}</span>
      </div>
    </aside>
  );
};

export default ProductDetail;
