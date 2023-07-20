
import { useState, useEffect } from "react";

// IMAGES.

// Paleta fells soft nude.
import p_feelsSoftNude_1 from '../assets/Products/ProductsWithCategories/PaletaFeelsSoftNude/feelsSoftNude_1.png';
import p_feelsSoftNude_2 from '../assets/Products/ProductsWithCategories/PaletaFeelsSoftNude/feelsSoftNude_2.png';
const feelsSoftNude = [p_feelsSoftNude_1, p_feelsSoftNude_2];

// Primer facial perfect skin.
import primer_facial from '../assets/Products/OneProduct/Primer/PrimerFacialSkinPerfect.png';
const primer = [primer_facial];

// POLVO TRANSLÚCIDO FEELS
import polvoTranslucido_1 from '../assets/Products/OneProduct/PolvoTranslucido/PolvoTranslucido_1.png';
const polvoTranslucido = [polvoTranslucido_1]



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
                title: `PALETA DE SOMBRAS FEELS SOFT NUDE`,
                price: 50_000,
                description: `Tiene 17 tonos con maravillosos tonos nude y rosa, además, 1 primer de ojos, ofreciendote infinitas posibilidades de maquillaje.
                Soft Nude es de alta pigmentación, con una textura súper aterciopelada y suave.`,
                image: feelsSoftNude,
                category: "maquillaje"
            },
            {
                id: 2,
                title: `PRIMER FACIAL SKIN PERFECT`,
                price: 29_000,
                description: `Gran aliado para tu maquillaje, tiene una textura de silicona, suaviza la piel, minimiza la apariencia de los poros al hacer una capa delgada en la piel.`,
                image: primer,
                category: "skincare"

            },
            {
                id: 3,
                title: `POLVO TRANSLÚCIDO FEELS`,
                price: 28_000,
                description: `Tiene un acabado mate, una textura ultrafina y ligera que disimula pequeñas imperfecciones, dejando la piel seca y libre de grasa.
                ¡Se adapta a todos los tonos de piel.`,
                image: polvoTranslucido,
                category: "maquillaje"

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
