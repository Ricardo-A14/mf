
import { useState } from "react";


const useInitialState = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState("");

    const GetValue = (value) => {
        setFilteredProduct(value);
    }

    return {
        allProducts,
        setAllProducts,
        filteredProduct,
        GetValue
    }
}

export default useInitialState;
