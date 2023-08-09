
import { useState, useEffect } from "react";

// IMAGES.

// FEELS SOFT NUDE PALETTE.
import p_feelsSoftNude_1 from '../assets/Products/ProductsWithCategories/PaletaFeelsSoftNude/feelsSoftNude_1.png';
import p_feelsSoftNude_2 from '../assets/Products/ProductsWithCategories/PaletaFeelsSoftNude/feelsSoftNude_2.png';
const feelsSoftNude = [p_feelsSoftNude_1, p_feelsSoftNude_2, p_feelsSoftNude_1, p_feelsSoftNude_2];
// PRIMER FACIAL PERFECT SKIN.
import primer_facial from '../assets/Products/OneProduct/Primer/PrimerFacialSkinPerfect.png';
const primer = [primer_facial];
// POLVO TRANSLÚCIDO FEELS.
import polvoTranslucido_1 from '../assets/Products/OneProduct/PolvoTranslucido/PolvoTranslucido_1.png';
const polvoTranslucido = [polvoTranslucido_1, polvoTranslucido_1, polvoTranslucido_1, polvoTranslucido_1];
// HELLO MERMAID PALETTE.
import helloMermaid_1 from '../assets/Products/ProductsWithCategories/PaletteHelloMermaid/HelloMermaid_1.png';
import helloMermaid_2 from '../assets/Products/ProductsWithCategories/PaletteHelloMermaid/HelloMermaid_2.png';
import helloMermaid_3 from '../assets/Products/ProductsWithCategories/PaletteHelloMermaid/HelloMermaid_3.png';
const helloMermaid = [helloMermaid_1, helloMermaid_2, helloMermaid_3, helloMermaid_3];
// PARADISE PALETTE.
import paradise_p from '../assets/Products/ProductsWithCategories/PaletteParadise/Paradise.png'
const paradise = [paradise_p, paradise_p, paradise_p, paradise_p];
// VARIED QUEEN PALEET.
import donutsPaleet_1 from '../assets/Products/ProductsWithCategories/PaleetVariedQueen/DonutsPalette.png';
const donutsPaleet = [donutsPaleet_1, donutsPaleet_1, donutsPaleet_1, donutsPaleet_1];
// VITAMIN C BIOAQUA.
import vitamin_1 from '../assets/Products/OneProduct/VCBioAqua/VCBioaqua_1.png';
import vitamin_2 from '../assets/Products/OneProduct/VCBioAqua/VCBioaqua_2.png';
const vitaminC = [vitamin_1, vitamin_2, vitamin_2, vitamin_2];
// ANTI WRINKLE EYE CREAM.
import antyWrinkle from '../assets/Products/OneProduct/CremaOjosAEnvejecimiento/AntiWrinkleEyeCream.png';
const eyeCream = [antyWrinkle, antyWrinkle, antyWrinkle, antyWrinkle];
// POLVO BRONCEADOR DUAL.
import polvoBronceadorD_1 from '../assets/Products/OneProduct/PolvoBronceador/PressedPowder_1.png';
import polvoBronceadorD_2 from '../assets/Products/OneProduct/PolvoBronceador/PressedPowder_2.png';
const polvoBronceador = [polvoBronceadorD_1, polvoBronceadorD_2, polvoBronceadorD_2, polvoBronceadorD_2];
// HYALURONIC ACID.
import hyaluronicAcid_1 from '../assets/Products/OneProduct/WaterGel/HyaluronicAcid_1.png';
import hyaluronicAcid_2 from '../assets/Products/OneProduct/WaterGel/HyaluronicAcid_2.png';
const waterGel = [hyaluronicAcid_1, hyaluronicAcid_2, hyaluronicAcid_2, hyaluronicAcid_2];
// EXFOLIANTE DE ARROZ.
import exfoliante_1 from '../assets/Products/OneProduct/ExfolianteArroz/ExfolianteArroz_1.png';
import exfoliante_2 from '../assets/Products/OneProduct/ExfolianteArroz/ExfolianteArroz_2.png';
const exfolianteArroz = [exfoliante_1, exfoliante_2, exfoliante_2, exfoliante_2];
// SOMBRA PARA OJOS ANYLADY.
import sombraOjos_1 from '../assets/Products/ProductsWithCategories/SombraOjos/SombraOjos_1.png';
import sombraOjos_2 from '../assets/Products/ProductsWithCategories/SombraOjos/SombraOjos_2.png';
import sombraOjos_3 from '../assets/Products/ProductsWithCategories/SombraOjos/SombraOjos_3.png';
const sombrasOjos = [sombraOjos_1, sombraOjos_2, sombraOjos_3, sombraOjos_3];
// POLVO COMPACTO MEDIUM.
import polvoCom_1 from '../assets/Products/OneProduct/PolvoCompacto/PolvoCom_1.png';
import polvoCom_2 from '../assets/Products/OneProduct/PolvoCompacto/PolvoCom_2.png';
import polvoCom_4 from '../assets/Products/OneProduct/PolvoCompacto/PolvoCom_4.png';
import polvoCom_5 from '../assets/Products/OneProduct/PolvoCompacto/PolvoCom_5.png';
const polvosCompactos = [polvoCom_1, polvoCom_2, polvoCom_4, polvoCom_5];
// BÁSE LIQUIDA BAGE.
import bage_2 from '../assets/Products/OneProduct/BaseLiquida/Bage_2.png';
import bage_3 from '../assets/Products/OneProduct/BaseLiquida/Bage_3.png';
import bage_4 from '../assets/Products/OneProduct/BaseLiquida/Bage_4.png';
import bage_5 from '../assets/Products/OneProduct/BaseLiquida/Bage_5.png';
import bage_7 from '../assets/Products/OneProduct/BaseLiquida/Bage_7.png';
const basesBage = [bage_2, bage_3, bage_4, bage_5, bage_7];
// GEL TINT.
import tintRed from '../assets/Products/OneProduct/GelTint/gelRed.png';
import tintJuice from '../assets/Products/OneProduct/GelTint/gelJuice.png';
import tintPool from '../assets/Products/OneProduct/GelTint/gelPool.png';
const tintGel = [tintRed, tintJuice, tintPool, tintPool];
// CARE LIPS.
import careLip_1 from '../assets/Products/OneProduct/LabialCareLips/CareLips_1.png';
import careLip_2 from '../assets/Products/OneProduct/LabialCareLips/CareLips_2.png';
import careLip_3 from '../assets/Products/OneProduct/LabialCareLips/CareLips_3.png';
const careLips = [careLip_1, careLip_2, careLip_3, careLip_3];



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

    // Get item use variety.
    const [useVariety, setUseVariety] = useState({});


    // Active Names.
    const [nombrePolvos, setNombrePolvos] = useState("");
    const [nombreBases, setNombreBases] = useState("");
    const [gelTintName, setGelTintName] = useState("");
    const [careLipsName, setCareLipsName] = useState("");

    // TEST.
    const [varietyImages, setVarietyImages] = useState("");
    const [varietyImages2, setVarietyImages2] = useState("");
    const [varietyImages3, setVarietyImages3] = useState("");
    const [varietyImages4, setVarietyImages4] = useState("");

    const [imagesPo, setImagesPo] = useState(null);
    const [imagesBase, setImagesBase] = useState(null);
    const [gelTintImg, setGelTintImg] = useState(null);
    const [careLipsImg, setCareLipsImg] = useState(null);

    const [newImages, setNewImages] = useState(polvosCompactos);
    const [newImages2, setNewImages2] = useState(basesBage);
    const [newImages3, setNewImages3] = useState(tintGel);
    const [newImages4, setNewImages4] = useState(careLips);



    // GET PRODUCTS
    useEffect(() => {
        const productList = [
            {
                id: 1,
                title: `PALETA DE SOMBRAS FEELS SOFT NUDE RUBY ROSE`,
                price: 50_000,
                description: `Tiene 17 tonos con maravillosos tonos nude y rosa, además, 1 primer de ojos, ofreciendote infinitas posibilidades de maquillaje.
                Soft Nude es de alta pigmentación, con una textura súper aterciopelada y suave.`,
                image: feelsSoftNude,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
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
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 3,
                title: `PALETA DE SOMBRAS PARADISE ANYLADY`,
                price: 42_000,
                description: `Paleta de sombras con 35 tonos`,
                image: paradise,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 4,
                title: `PALETA DE SOMBRAS VARIED QUEEN`,
                price: 46_000,
                description: `Paleta de sombras donuts varied
                con 80 tonos.`,
                image: donutsPaleet,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 5,
                title: `POLVO TRANSLÚCIDO FEELS`,
                price: 28_000,
                description: `Tiene un acabado mate, una textura ultrafina y ligera que disimula pequeñas imperfecciones, dejando la piel seca y libre de grasa.
                ¡Se adapta a todos los tonos de piel.`,
                image: polvoTranslucido,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 6,
                title: `POLVO BRONCEADOR DUAL.`,
                price: 22_000,
                description: `Polvo compacto bronceador con tono shimmer y mate dando un acabado perfecto a tu piel. Incluye un lado matte y un lado satinado, Alta durabilidad, Ideal para todos los tonos y tipos de piel`,
                image: polvoBronceador,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 7,
                title: `SOMBRA PARA OJOS ANYLADY.`,
                price: 20_000,
                description: `Producto de alta calidad.`,
                image: sombrasOjos,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },

            // SkinCare
            {
                id: 8,
                title: `PRIMER FACIAL SKIN PERFECT`,
                price: 29_000,
                description: `Gran aliado para tu maquillaje, tiene una textura de silicona, suaviza la piel, minimiza la apariencia de los poros al hacer una capa delgada en la piel.`,
                image: primer,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 9,
                title: `SUERO VITAMINA C BIOAQUA 100 ml`,
                price: 20_000,
                description: `Para todo tipo de piel`,
                image: vitaminC,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 10,
                title: `CREMA CONTORNO DE OJOS ANTI ENVEJECIMIENTO BIOAQUA.`,
                price: 15_000,
                description: `producto de belleza diseñado para cuidar y tratar la piel alrededor de los ojos. Esta área de la piel es conocida por ser más delicada y propensa a la aparición de arrugas, y otros signos de envejecimiento.`,
                image: eyeCream,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 11,
                title: `ÁCIDO HIALURÓNICO BIOAQUA.`,
                price: 21_000,
                description: `Hidratante y humectante, preventivo y correctivo de las arrugas, para todas las pieles, especialmente las secas.`,
                image: waterGel,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 12,
                title: `EXFOLIANTE DE ARROZ BIOACUA.`,
                price: 21_000,
                description: `Una buena exfoliación previene el envejecimiento prematuro de la piel.`,
                image: exfolianteArroz,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 13,
                title: `POLVOS COMPACTOS.`,
                price: 25_000,
                description: `Proporciona un efecto natural en la piel, controla el exceso de brillo y disimula las manchas e imperfecciones de la piel.`,
                image: polvosCompactos,
                category: "maquillaje",
                useVariety: true,
                varietyNumber: 1
            },
            {
                id: 14,
                title: `BÁSE LIQUIDA.`,
                price: 29_000,
                description: `Cuando se trata de maquillaje, siempre queremos una piel perfecta y natural. Pensando en ti, Ruby Rose crea la base Soft Matte.
                Una base desarrollada para contener la grasa de la piel y ocultar las imperfecciones, además de proporcionar un excelente acabado, alta cobertura y larga duración.`,
                image: basesBage,
                category: "maquillaje",
                useVariety: true,
                varietyNumber: 2
            },
            {
                id: 15,
                title: `GEL TINTA.`,
                price: 20_000,
                description: `Gel Tint es perfecto para realzar el color natural de tus labios con una excelente pigmentación de larga duración que deja los labios enrojecidos durante todo el día.
                Además tus labios estarán hidratados y saludables durante todo el día, pues el GEL TINT está enriquecido con ÁCIDO HIALURÓNICO Y D-PANTENOL, además, huele delicioso!!.`,
                image: tintGel,
                category: "maquillaje",
                useVariety: true,
                varietyNumber: 3
            },
            {
                id: 16,
                title: `EXFOLIANTE LABIAL CARE LIPS.`,
                price: 12_000,
                description: `Exfoliante labial en barra, con un aroma irresistible a café.
                Y sabes que es lo mejor de todo? Tiene aceites hidratantes y nutritivos!!`,
                image: careLips,
                category: "maquillaje",
                useVariety: true,
                varietyNumber: 4
            },




        ];
        setItems(productList);
    }, []);



    const HandleActiveMenu = (category) => {
        setSearchByCategory(category.toLowerCase());
        setActiveMobileMenu(false);
    }

    const InProductDetailFromHeader = () => {
        setOpenProductDetail(false);
        setActiveMobileMenu(!activeMobileMenu);
        setImagesPo(null);
    }

    const InactiveProductDetailFromTitle = () => {
        setSearchByCategory();
        setOpenProductDetail(false);
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

    const HandleUseVariety = (value) => {
        setUseVariety(value);
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

        HandleActiveMenu,

        useVariety,
        HandleUseVariety,

        InProductDetailFromHeader,
        InactiveProductDetailFromTitle,


        // TEST.
        varietyImages, setVarietyImages,
        varietyImages2, setVarietyImages2,
        varietyImages3, setVarietyImages3,
        varietyImages4, setVarietyImages4,

        nombrePolvos, setNombrePolvos,
        nombreBases, setNombreBases,
        gelTintName, setGelTintName,
        careLipsName, setCareLipsName,

        imagesPo, setImagesPo,
        imagesBase, setImagesBase,
        gelTintImg, setGelTintImg,
        careLipsImg, setCareLipsImg,

        newImages, setNewImages,
        newImages2, setNewImages2,
        newImages3, setNewImages3,
        newImages4, setNewImages4

    }
}

export default useInitialState;
