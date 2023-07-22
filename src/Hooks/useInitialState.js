
import { useState, useEffect } from "react";

// IMAGES.

// FEELS SOFT NUDE PALETTE.
import p_feelsSoftNude_1 from '../assets/Products/ProductsWithCategories/PaletaFeelsSoftNude/feelsSoftNude_1.png';
import p_feelsSoftNude_2 from '../assets/Products/ProductsWithCategories/PaletaFeelsSoftNude/feelsSoftNude_2.png';
const feelsSoftNude = [p_feelsSoftNude_1, p_feelsSoftNude_2, p_feelsSoftNude_2];
// PRIMER FACIAL PERFECT SKIN.
import primer_facial from '../assets/Products/OneProduct/Primer/PrimerFacialSkinPerfect.png';
const primer = [primer_facial, primer_facial, primer_facial];
// POLVO TRANSLÚCIDO FEELS.
import polvoTranslucido_1 from '../assets/Products/OneProduct/PolvoTranslucido/PolvoTranslucido_1.png';
const polvoTranslucido = [polvoTranslucido_1, polvoTranslucido_1, polvoTranslucido_1];
// HELLO MERMAID PALETTE.
import helloMermaid_1 from '../assets/Products/ProductsWithCategories/PaletteHelloMermaid/HelloMermaid_1.png';
import helloMermaid_2 from '../assets/Products/ProductsWithCategories/PaletteHelloMermaid/HelloMermaid_2.png';
import helloMermaid_3 from '../assets/Products/ProductsWithCategories/PaletteHelloMermaid/HelloMermaid_3.png';
const helloMermaid = [helloMermaid_1, helloMermaid_2, helloMermaid_3];
// PARADISE PALETTE.
import paradise_p from '../assets/Products/ProductsWithCategories/PaletteParadise/Paradise.png'
const paradise = [paradise_p, paradise_p, paradise_p];
// VARIED QUEEN PALEET.
import donutsPaleet_1 from '../assets/Products/ProductsWithCategories/PaleetVariedQueen/DonutsPalette.png';
const donutsPaleet = [donutsPaleet_1, donutsPaleet_1, donutsPaleet_1];
// VITAMIN C BIOAQUA.
import vitamin_1 from '../assets/Products/OneProduct/VCBioAqua/VCBioaqua_1.png';
import vitamin_2 from '../assets/Products/OneProduct/VCBioAqua/VCBioaqua_2.png';
const vitaminC = [vitamin_1, vitamin_2, vitamin_2];
// ANTI WRINKLE EYE CREAM.
import antyWrinkle from '../assets/Products/OneProduct/CremaOjosAEnvejecimiento/AntiWrinkleEyeCream.png';
const eyeCream = [antyWrinkle, antyWrinkle, antyWrinkle];


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
                title: `PALETA DE SOMBRAS FEELS SOFT NUDE RUBY ROSE`,
                price: 50_000,
                description: `Tiene 17 tonos con maravillosos tonos nude y rosa, además, 1 primer de ojos, ofreciendote infinitas posibilidades de maquillaje.
                Soft Nude es de alta pigmentación, con una textura súper aterciopelada y suave.`,
                image: feelsSoftNude,
                category: "maquillaje"
            },
            {
                id: 2,
                title: `PALETA DE SOMBRAS HELLO MERMAID ANYLADY`,
                price: 42_000,
                description: `Paleta de sombras con 57 tonos,
                acabado mate y satinado,
                calidad profesional,
                excelente pigmentación,
                fáciles de difuminar,
                de larga duración,
                se adhieren muy bien al párpado.`,
                image: helloMermaid,
                category: "maquillaje"

            },
            {
                id: 3,
                title: `PALETA DE SOMBRAS PARADISE ANYLADY`,
                price: 42_000,
                description: `Paleta de sombras con 35 tonos`,
                image: paradise,
                category: "maquillaje"

            },
            {
                id: 4,
                title: `PALETA DE SOMBRAS VARIED QUEEN`,
                price: 46_000,
                description: `Paleta de sombras donuts varied
                con 80 tonos.`,
                image: donutsPaleet,
                category: "maquillaje"

            },
            {
                id: 5,
                title: `POLVO TRANSLÚCIDO FEELS`,
                price: 28_000,
                description: `Tiene un acabado mate, una textura ultrafina y ligera que disimula pequeñas imperfecciones, dejando la piel seca y libre de grasa.
                ¡Se adapta a todos los tonos de piel.`,
                image: polvoTranslucido,
                category: "maquillaje"

            },

            // SkinCare
            {
                id: 6,
                title: `PRIMER FACIAL SKIN PERFECT`,
                price: 29_000,
                description: `Gran aliado para tu maquillaje, tiene una textura de silicona, suaviza la piel, minimiza la apariencia de los poros al hacer una capa delgada en la piel.`,
                image: primer,
                category: "skincare"

            },
            {
                id: 7,
                title: `SUERO VITAMINA C BIOAQUA 100 ml`,
                price: 20_000,
                description: `Para todo tipo de piel`,
                image: vitaminC,
                category: "skincare"

            },
            {
                id: 8,
                title: `CREMA CONTORNO DE OJOS ANTI ENVEJECIMIENTO BIOAQUA.`,
                price: '',
                description: `producto de belleza diseñado para cuidar y tratar la piel alrededor de los ojos. Esta área de la piel es conocida por ser más delicada y propensa a la aparición de arrugas, y otros signos de envejecimiento.`,
                image: eyeCream,
                category: "skincare"

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
