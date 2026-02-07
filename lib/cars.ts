import mercedesGLS63 from "@/public/gallery/mercedes-gls-63.jpg";
import fordMustangGt from "@/public/gallery/mustang-gt-5.webp";
import mercedesCLE from "@/public/gallery/mercedes-cle.webp";
import teslaModelX from "@/public/gallery/tesla-model-x.webp";

const CARS = [
    {
        id: 1,
        carName: "Mercedes GLS 63",
        imagePath: mercedesGLS63,
        slug: "mercedes-gls-63",
        comment: "Full Extra",
        price30days: 1499000,
        features: {
            transmission: "Automatic",
            releaseDate: "2023",
            horsepower: 610,
        },
        tags: ["SUV", "5+ seats", "Sport", "Luxury", "Benzine"],
    },
    {
        id: 2,
        carName: "Mustang GT 5.0",
        imagePath: fordMustangGt,
        slug: "ford-mustang-gt",
        comment: "Full Extra",
        price30days: 499000,
        features: {
            transmission: "Automatic",
            releaseDate: "2025",
            horsepower: 460,
        },
        tags: ["Sport", "Cabrio", "Benzine"],
    },
    {
        id: 3,
        carName: "Mercedes CLE Cabrio",
        imagePath: mercedesCLE,
        slug: "mercedes-cle-cabrio",
        comment: "Full Extra",
        price30days: 499000,
        features: {
            transmission: "Automatic",
            releaseDate: "2024",
            horsepower: 460,
        },
        tags: ["Sport", "Cabrio", "Benzine"],
    },
    {
        id: 4,
        carName: "Tesla Model X",
        imagePath: teslaModelX,
        slug: "tesla-model-x",
        comment: "Full Extra",
        price30days: 599900,
        features: {
            transmission: "Automatic",
            releaseDate: "2025",
            horsepower: 500,
        },
        tags: ["Sport", "Luxury", "Electric"],
    },
];

export default CARS;
