
import { useState } from "react";


const useInitialState = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [getFilteredValue, setGetFilteredValue] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const GetValue = (value) => {
        setGetFilteredValue(value);
    }

    return {
        allProducts,
        setAllProducts,
        getFilteredValue,
        setGetFilteredValue,
        filteredProducts,
        setFilteredProducts,
        GetValue
    }
}

export default useInitialState;
