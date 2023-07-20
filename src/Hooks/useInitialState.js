
import { useState, useEffect } from "react";

import product1 from "../assets/products/20221006_113015.jpg";


const useInitialState = () => {

    // Product detail
    const [openProductDetail, setOpenProductDetail] = useState(false);
    const [productDetails, setProductDetails] = useState([]);

    // Items
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState("");

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState("");

    // Active mobile menu
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);

    // Get Products
    useEffect(() => {
        const productList = [
            {
                id: 1,
                title: `Maquillaje 1`,
                price: 100,
                description: `sdfhsdh sdhsdfh sdhsdh sdtjhstrj tukrtuykrtyk etyetyj reuwrtu rtuwru wruweru ertuwertu ertuertu ertuertu ertuertu eruertuertueyu erueryueyueyu erueru PRODUCT DESCRIPTION 1`,
                image: `${product1}`,
                category: "maquillaje"
            },
            {
                id: 2,
                title: `Maquillaje 2`,
                price: 200,
                description: `PRODUCT DESCRIPTION 2`,
                image: `${product1}`,
                category: "maquillaje"

            },
            {
                id: 3,
                title: `Maquillaje 1`,
                price: 300,
                description: `PRODUCT DESCRIPTION 3`,
                image: `${product1}`,
                category: "maquillaje"

            },
            {
                id: 4,
                title: `Labial 1`,
                price: 400,
                description: `PRODUCT DESCRIPTION 4`,
                image: `${product1}`,
                category: "labiales"
            },
            {
                id: 5,
                title: `Labial 2`,
                price: 500,
                description: `PRODUCT DESCRIPTION 5`,
                image: `${product1}`,
                category: "labiales"

            },
            {
                id: 6,
                title: `Labial 3`,
                price: 600,
                description: `PRODUCT DESCRIPTION 6`,
                image: `${product1}`,
                category: "labiales"

            },
        ];
        setItems(productList);
    }, []);

    const HandleActiveMenu = (category) => {
        setSearchByCategory(category.toLowerCase());
        setActiveMobileMenu(false);
    }


    const FilteredItemsByTitle = (items, searchByTitle) => {
        return items.filter((items) => {
            return items.title.toLowerCase().includes(searchByTitle.toLowerCase())
        })
    }

    const FilteredItemsByCategory = (items, searchByCategory) => {
        return items.filter((items) => {
            return items.category.toLowerCase().includes(searchByCategory.toLowerCase())
        })
    }

    const FilteredBy = (searchType, items, searchByTitle, searchByCategory) => {

        if (searchType === "BY_TITLE") {
            return FilteredItemsByTitle(items, searchByTitle);
        }

        if (searchType === "BY_CATEGORY") {
            return FilteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === "BY_TITLE_AND_CATEGORY") {
            return FilteredItemsByCategory(items, searchByCategory).filter(items => items.title.toLowerCase().includes(searchByTitle))
        }

        if (!searchType) {
            return items;
        }
    }

    useEffect(() => {

        if (searchByTitle && searchByCategory) {
            setFilteredItems(FilteredBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory))
        }

        if (searchByTitle && !searchByCategory) {
            setFilteredItems(FilteredBy("BY_TITLE", items, searchByTitle, searchByCategory))
        }

        if (!searchByTitle && searchByCategory) {
            setFilteredItems(FilteredBy("BY_CATEGORY", items, searchByTitle, searchByCategory))
        }

        if (!searchByTitle && !searchByCategory) {
            setFilteredItems(FilteredBy(null, items, searchByTitle, searchByCategory))
        }

    }, [items, searchByTitle, searchByCategory])


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

        searchByTitle,
        setSearchByTitle,

        filteredItems,

        setSearchByCategory,

        activeMobileMenu,
        setActiveMobileMenu,

        HandleActiveMenu

    }
}

export default useInitialState;
