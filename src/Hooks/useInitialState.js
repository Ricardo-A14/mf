
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
import careLips_1 from '../assets/Products/OneProduct/LabialCareLips/CareLips_1.png';
import careLips_2 from '../assets/Products/OneProduct/LabialCareLips/CareLips_2.png';
import careLips_3 from '../assets/Products/OneProduct/LabialCareLips/CareLips_3.png';
const careLips = [careLips_1, careLips_2, careLips_3, careLips_3];
// PESTAÑINA.
import pesta1 from '../assets/Products/OneProduct/Pestanina/pesta1.png';
import pesta2 from '../assets/Products/OneProduct/Pestanina/pesta2.png';
import pesta3 from '../assets/Products/OneProduct/Pestanina/pesta3.png';
import pesta4 from '../assets/Products/OneProduct/Pestanina/pesta4.png';
import pesta5 from '../assets/Products/OneProduct/Pestanina/pesta5.png';
const pesta = [pesta1, pesta2, pesta3, pesta4, pesta5];
// DELINEADOR DOLCE BELLA.
import delineadorDB from '../assets/Products/OneProduct/DelineadorDB/Delineador_d_b.png';
const delinedorDolce = [delineadorDB];
// ESPUMA LIMPIADORA.
import espumaLimpiadora from '../assets/Products/OneProduct/EspumaLimpiadora/EspumaLimpiadora.png';
const espuma = [espumaLimpiadora];
// passion palette.
import passionPalette_AL from '../assets/Products/OneProduct/PassionPaletteAL//PassionPalette_A_L.png';
const passionPalette = [passionPalette_AL];
// BEAUTY BLENDER MAS BASE.
import setSponjas1 from '../assets/Products/OneProduct/EsponjaConBase/esponja3.png';
const esponjasConBase1 = [setSponjas1];
import setSponjas2 from '../assets/Products/OneProduct/EsponjaConBase/Bb3.png';
const esponjasConBase2 = [setSponjas2];
// UNICORN PALETTE ANY LADY.
import uniconrPalette_A_L from '../assets/Products/OneProduct/UnicornPaletteAL/unicotnPalette_A_L.png';
const unicornPalette = [uniconrPalette_A_L];
// BEST BROWN.
import light from '../assets/Products/OneProduct/BestBrow/Light.png';
const bestBrow = [light];



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
    const [pestaName, setPestaName] = useState("");
    const [bestBrowName, setBestBrowName] = useState("");

    // TEST.
    const [varietyImages, setVarietyImages] = useState("");
    const [varietyImages2, setVarietyImages2] = useState("");
    const [varietyImages3, setVarietyImages3] = useState("");
    const [varietyImages4, setVarietyImages4] = useState("");
    const [varietyImages5, setVarietyImages5] = useState("");
    const [varietyImages6, setVarietyImages6] = useState("");

    const [imagesPo, setImagesPo] = useState(null);
    const [imagesBase, setImagesBase] = useState(null);
    const [gelTintImg, setGelTintImg] = useState(null);
    const [careLipsImg, setCareLipsImg] = useState(null);
    const [pestaImg, sePestaImg] = useState(null);
    const [bestBrowImg, setBestBrowImg] = useState(null);

    const [newImages, setNewImages] = useState(polvosCompactos);
    const [newImages2, setNewImages2] = useState(basesBage);
    const [newImages3, setNewImages3] = useState(tintGel);
    const [newImages4, setNewImages4] = useState(careLips);
    const [newImages5, setNewImages5] = useState(pesta);
    const [newImages6, setNewImages6] = useState(pesta);



    // GET PRODUCTS
    useEffect(() => {
        const productList = [
            {
                id: 1,
                title: `Paleta de sombras Feels Soft Nude Ruby Rose.`,
                price: '50.000',
                rPrice: 50_000,
                description: `Tiene 17 tonos con maravillosos tonos nude y rosa, además, 1 primer de ojos, ofreciendote infinitas posibilidades de maquillaje.
                Soft Nude es de alta pigmentación, con una textura súper aterciopelada y suave.`,
                image: feelsSoftNude,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 2,
                title: `Paleta de sombras Hello Mermaid Anylady.`,
                price: '42.000',
                rPrice: 42_000,
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
                title: `Paleta de sombras Paradise Anylady.`,
                price: '42.000',
                rPrice: 42_000,
                description: `Paleta de sombras con 35 tonos`,
                image: paradise,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 4,
                title: `Paleta de sombras Varied Queen.`,
                price: '46.000',
                rPrice: 46_000,
                description: `Paleta de sombras donuts varied
                con 80 tonos.`,
                image: donutsPaleet,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 5,
                title: `Polvo translúcido Feels.`,
                price: '28.000',
                rPrice: 28_000,
                description: `Tiene un acabado mate, una textura ultrafina y ligera que disimula pequeñas imperfecciones, dejando la piel seca y libre de grasa.
                ¡Se adapta a todos los tonos de piel.`,
                image: polvoTranslucido,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 6,
                title: `Polvo bronceador Dual.`,
                price: '22.000',
                rPrice: 22_000,
                description: `Polvo compacto bronceador con tono shimmer y mate dando un acabado perfecto a tu piel. Incluye un lado matte y un lado satinado, Alta durabilidad, Ideal para todos los tonos y tipos de piel`,
                image: polvoBronceador,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 7,
                title: `Sombra para ojos Anylady.`,
                price: '20.000', // 10.000 anylady store.
                rPrice: 20_000,
                description: `Producto de alta calidad.`,
                image: unicornPalette,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 8,
                title: `Primer facial Skin Perfect.`,
                price: '29.000',
                rPrice: 29_000,
                description: `Gran aliado para tu maquillaje, tiene una textura de silicona, suaviza la piel, minimiza la apariencia de los poros al hacer una capa delgada en la piel.`,
                image: primer,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 9,
                title: `Suero vitamina c Bioaqua 100 ml.`,
                price: '20.000',
                rPrice: 20_000,
                description: `Para todo tipo de piel`,
                image: vitaminC,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 10,
                title: `Crema contorno de ojos anti envejecimiento Bioaqua.`,
                price: '15.000',
                rPrice: 15_000,
                description: `producto de belleza diseñado para cuidar y tratar la piel alrededor de los ojos. Esta área de la piel es conocida por ser más delicada y propensa a la aparición de arrugas, y otros signos de envejecimiento.`,
                image: eyeCream,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 11,
                title: `Ácido hialurónico Bioaqua.`,
                price: '21.000',
                rPrice: 21_000,
                description: `Hidratante y humectante, preventivo y correctivo de las arrugas, para todas las pieles, especialmente las secas.`,
                image: waterGel,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 12,
                title: `Exfoliante de arroz Bioaqua.`,
                price: '21.000',
                rPrice: 21_000,
                description: `Una buena exfoliación previene el envejecimiento prematuro de la piel.`,
                image: exfolianteArroz,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 13,
                title: `Polvos compactos.`,
                price: '25.000',
                rPrice: 25_000,
                description: `Proporciona un efecto natural en la piel, controla el exceso de brillo y disimula las manchas e imperfecciones de la piel.`,
                image: polvosCompactos,
                category: "maquillaje",
                useVariety: true,
                varietyNumber: 1
            },
            {
                id: 14,
                title: `Báse liquida.`,
                price: '29.000',
                rPrice: 29_000,
                description: `Cuando se trata de maquillaje, siempre queremos una piel perfecta y natural. Pensando en ti, Ruby Rose crea la base Soft Matte.
                Una base desarrollada para contener la grasa de la piel y ocultar las imperfecciones, además de proporcionar un excelente acabado, alta cobertura y larga duración.`,
                image: basesBage,
                category: "maquillaje",
                useVariety: true,
                varietyNumber: 2
            },
            {
                id: 15,
                title: `Gel tinta.`,
                price: '20.000',
                rPrice: 20_000,
                description: `Gel Tint es perfecto para realzar el color natural de tus labios con una excelente pigmentación de larga duración que deja los labios enrojecidos durante todo el día.
                Además tus labios estarán hidratados y saludables durante todo el día, pues el GEL TINT está enriquecido con ÁCIDO HIALURÓNICO Y D-PANTENOL, además, huele delicioso!!.`,
                image: tintGel,
                category: "maquillaje",
                useVariety: true,
                varietyNumber: 3
            },
            {
                id: 16,
                title: `Exfoliante labial Care Lips.`,
                price: '12.000',
                rPrice: 12_000,
                description: `Exfoliante labial en barra, con un aroma irresistible a café.
                Y sabes que es lo mejor de todo? Tiene aceites hidratantes y nutritivos!!`,
                image: careLips,
                category: "maquillaje",
                useVariety: true,
                varietyNumber: 4
            },
            {
                id: 17,
                title: `Pestañina Ruby Rose.`,
                price: '16.000',
                rPrice: 16_000,
                description: `Exfoliante labial en barra, con un aroma irresistible a café.
                Y sabes que es lo mejor de todo? Tiene aceites hidratantes y nutritivos!!`,
                image: pesta,
                category: "maquillaje",
                useVariety: true,
                varietyNumber: 5
            },
            {
                id: 18,
                title: `Plumón Delineador Ojos Lapiz Dolce Bella.`,
                price: '19.000',
                rPrice: 19_000,
                description: `Delineador tipo crayón con punta flexible que permite lograr líneas precisas; gruesas o delgadas en un mismo trazo. Resalta tu mirada con Dolce Bella. `,
                image: delinedorDolce,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 19,
                title: `Espuma limpiadora desmaquillante facial protección urbana Ruby Skin.`,
                price: '28.000',
                rPrice: 28_000,
                description: `Nuestra espuma limpiadora además de ser desmaquillante te ayuda a desintoxicar la piel de tu rostro removiendo rápidamente las toxinas e impurezas que se acumulan durante el día.`,
                image: espuma,
                category: "skincare",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 20,
                title: `Paleta de sombras Passion Anylady`,
                price: '32.000', // pink store price.
                rPrice: 32_000,
                description: `Paleta de sombras con 24 tonos,
                calidad profesional,
                Excelente pigmentación,
                Fáciles de difuminar y de larga duración.`,
                image: passionPalette,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 21,
                title: `Beauty blender x 3 Mas Base`,
                price: '15.000',
                rPrice: 15_000,
                description: `El set de esponjas es una excelente opción para aplicar y difuminar el maquillaje en crema. Incluye 3 esponjas suaves y
                1 Soporte para esponja, ideal para mantener la esponja en una condición ventilada y aislada de la superficie.`,
                image: esponjasConBase1,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 22,
                title: `Beauty blender x 3 Mas Base`,
                price: '15.000',
                rPrice: 15_000,
                description: `El set de esponjas es una excelente opción para aplicar y difuminar el maquillaje en crema. Incluye 3 esponjas suaves y
                1 Soporte para esponja, ideal para mantener la esponja en una condición ventilada y aislada de la superficie.`,
                image: esponjasConBase2,
                category: "maquillaje",
                useVariety: false,
                varietyNumber: 0
            },
            {
                id: 23,
                title: `Best Brow - Pomada para cejas.`,
                price: '18.000', // Ruby Rose Price.
                rPrice: 18_000,
                description: `Ideal para quienes desean una ceja más marcada y rellena. Tiene alta definición y pigmentación, además de secado rápido.
                Disponible en tres tonos: Light, Medium y Dark.`,
                image: bestBrow,
                category: "maquillaje",
                useVariety: true,
                varietyNumber: 6
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
        nombrePolvos, setNombrePolvos,
        nombreBases, setNombreBases,
        gelTintName, setGelTintName,
        careLipsName, setCareLipsName,
        pestaName, setPestaName,
        bestBrowName, setBestBrowName,

        varietyImages, setVarietyImages,
        varietyImages2, setVarietyImages2,
        varietyImages3, setVarietyImages3,
        varietyImages4, setVarietyImages4,
        varietyImages5, setVarietyImages5,
        varietyImages6, setVarietyImages6,

        imagesPo, setImagesPo,
        imagesBase, setImagesBase,
        gelTintImg, setGelTintImg,
        careLipsImg, setCareLipsImg,
        pestaImg, sePestaImg,
        bestBrowImg, setBestBrowImg,

        newImages, setNewImages,
        newImages2, setNewImages2,
        newImages3, setNewImages3,
        newImages4, setNewImages4,
        newImages5, setNewImages5,
        newImages6, setNewImages6,

    }
}

export default useInitialState;
