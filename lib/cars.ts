import mercedesGLS63 from "@/public/gallery/mercedes-gls-63.jpg";
import mercedesGLS63_2 from "@/public/gallery/mercedes-gls-63_2.jpg";
import mercedesGLS63_3 from "@/public/gallery/mercedes-gls-63_3.jpg";
import mercedesGLS63_4 from "@/public/gallery/mercedes-gls-63_4.jpg";
import mercedesGLS63_5 from "@/public/gallery/mercedes-gls-63_5.jpg";
import mercedesGLS63_6 from "@/public/gallery/mercedes-gls-63_6.jpg";


/* 2 */
import fordMustangGt from "@/public/gallery/mustang-gt-5.webp";
import fordMustangGt_2 from "@/public/gallery/mustang-gt-5_2.webp";
import fordMustangGt_3 from "@/public/gallery/mustang-gt-5_3.webp";
import fordMustangGt_5 from "@/public/gallery/mustang-gt-5_5.webp";


/* 2 */
import mercedesCLE from "@/public/gallery/mercedes-cle.webp";
import mercedesCLE_2 from "@/public/gallery/mercedes-cle_2.webp";
import mercedesCLE_3 from "@/public/gallery/mercedes-cle_3.webp";
import mercedesCLE_4 from "@/public/gallery/mercedes-cle_4.webp";
import mercedesCLE_5 from "@/public/gallery/mercedes-cle_5.webp";
import mercedesCLE_6 from "@/public/gallery/mercedes-cle_6.webp";
import mercedesCLE_7 from "@/public/gallery/mercedes-cle_7.webp";
import mercedesCLE_8 from "@/public/gallery/mercedes-cle_8.webp";
import mercedesCLE_9 from "@/public/gallery/mercedes-cle_9.webp";


/* 2 */
import teslaModelX from "@/public/gallery/tesla-model-x.webp";
import teslaModelX_2 from "@/public/gallery/tesla-model-x_2.webp";
import teslaModelX_3 from "@/public/gallery/tesla-model-x_3.webp";
import teslaModelX_4 from "@/public/gallery/tesla-model-x_4.webp";
import teslaModelX_5 from "@/public/gallery/tesla-model-x_5.webp";
import teslaModelX_6 from "@/public/gallery/tesla-model-x_6.webp";



const CARS = [
    {
        id: 1,
        carName: "Mercedes GLS 63",
        imagePath: mercedesGLS63,
        slug: "mercedes-gls-63",
        comment: "Full Extra",
        price30days: 1499000,
        price3days: 50000,
        price7days: 150000,
        deposit: 350000,
        validLicenceInYears: 8,
        features: {
            transmission: "Automatic",
            releaseDate: "2023",
            horsepower: 610,
        },
        carouselImages: [mercedesGLS63_2, mercedesGLS63_3, mercedesGLS63_4, mercedesGLS63_5, mercedesGLS63_6],
        tags: ["SUV", "5+ seats", "Sport", "Luxury", "Benzine"],
    },
    {
        id: 2,
        carName: "Mustang GT 5.0",
        imagePath: fordMustangGt,
        slug: "ford-mustang-gt",
        comment: "Full Extra",
        price30days: 499000,
        price3days: 50000,
        price7days: 150000,
        deposit: 350000,
        validLicenceInYears: 7,
        features: {
            transmission: "Automatic",
            releaseDate: "2025",
            horsepower: 460,
        },
        carouselImages: [fordMustangGt_2, fordMustangGt_3, fordMustangGt_5],
        tags: ["Sport", "Cabrio", "Benzine"],
    },
    {
        id: 3,
        carName: "Mercedes CLE Cabrio",
        imagePath: mercedesCLE,
        slug: "mercedes-cle-cabrio",
        comment: "Full Extra",
        price30days: 499000,
        price3days: 50000,
        price7days: 150000,
        deposit: 350000,
        validLicenceInYears: 5,
        features: {
            transmission: "Automatic",
            releaseDate: "2024",
            horsepower: 460,
        },
        carouselImages: [mercedesCLE_2, mercedesCLE_3, mercedesCLE_4, mercedesCLE_5, mercedesCLE_6, mercedesCLE_7, mercedesCLE_8, mercedesCLE_9],
        tags: ["Sport", "Cabrio", "Benzine"],
    },
    {
        id: 4,
        carName: "Tesla Model X",
        imagePath: teslaModelX,
        slug: "tesla-model-x",
        comment: "Full Extra",
        price30days: 599900,
        price3days: 50000,
        price7days: 150000,
        deposit: 350000,
        validLicenceInYears: 4,
        features: {
            transmission: "Automatic",
            releaseDate: "2025",
            horsepower: 500,
        },
        carouselImages: [teslaModelX_2, teslaModelX_3, teslaModelX_4, teslaModelX_5, teslaModelX_6],
        tags: ["Sport", "Luxury", "Electric"],
    },
];

export default CARS;
