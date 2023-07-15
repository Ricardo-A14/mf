
import { useState, useEffect } from "react";

import product1 from "../assets/products/20221006_113015.jpg";


const useInitialState = () => {

    const [openProductDetail, setOpenProductDetail] = useState(false);
    const [productDetails, setProductDetails] = useState([]);

    const [items, setItems] = useState([]);

    const [filteredValue, setFilteredValue] = useState("");

    const GetFilteredValue = (value) => {
        setFilteredValue(value);
    }

    // Testing 1
    const [newItems, setNewItems] = useState([]);

    useEffect(() => {
        const productList = [
            {
                id: 1,
                title: `Product 1`,
                price: 100,
                description: `Product description 1`,
                image: `${product1}`,
            },
            {
                id: 2,
                title: `Product 2`,
                price: 200,
                description: `Product description 2`,
                image: `${product1}`,
            },
            {
                id: 3,
                title: `Product 3`,
                price: 300,
                description: `Product description 3`,
                image: `${product1}`,
            },
            {
                id: 4,
                title: `Product 4`,
                price: 400,
                description: `Product description 4`,
                image: `${product1}`,

            },
            {
                id: 5,
                title: `Product 5`,
                price: 500,
                description: `Product description 5`,
                image: `${product1}`,

            },
            {
                id: 6,
                title: `Product 6`,
                price: 600,
                description: `Product description 6`,
                image: `${product1}`,
            },
        ];
        setItems(productList);
    }, []);


    // Testing 1
    useEffect(() => {

        const filtered = items.filter((newItem) => {
            return newItem.title == filteredValue;
        })
        setNewItems(filtered);
    }, [filteredValue, setFilteredValue]);


    const GetProductDetails = (product) => {
        setOpenProductDetail(true);
        setProductDetails(product);
    }

    return {

        items,
        setItems,

        openProductDetail,
        setOpenProductDetail,

        GetProductDetails,
        productDetails,
        setProductDetails,

        filteredValue,
        setFilteredValue,
        GetFilteredValue,

        newItems
    }
}

export default useInitialState;
