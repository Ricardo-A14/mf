import { useContext } from "react";
import AppContext from "../../Context/index";

import "./ProductDetail.css";

import { XMarkIcon } from '@heroicons/react/24/solid';


const ProductDetail = () => {
  const { setOpenProductDetail, productDetails } = useContext(AppContext);

  return (
    <aside className="product-detail">
      <div
        className="close-product-detail"
        onClick={() => setOpenProductDetail(false)}
      >
        <XMarkIcon className="icon-x" />
      </div>

      <figure className="product-detail-img">
        <img src={productDetails.image[0]} alt="dfj" />
      </figure>

      <div className="aside-product-info">
        <span className="title">{productDetails.title}</span>
        <span className="price">$ {productDetails.price}</span>
        <span className="description">{productDetails.description}</span>
      </div>
    </aside>
  );
};

export default ProductDetail;
