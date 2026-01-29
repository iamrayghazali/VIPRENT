"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CarsHero() {
    return (
        <div className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden">
            {/* Background image with fade-in */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
            >
                <Image
                    src="/hero/car-outline-bg.jpg"
                    alt="Background Image"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </motion.div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Side-only faded borders */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black/60 to-transparent"></div>
                <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black/60 to-transparent"></div>
            </div>

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                    Choose from our wide selection of sports, luxury, and comfortable vehicles at affordable prices.
                </h1>
                <p className="mt-4 max-w-2xl text-sm md:text-lg text-white drop-shadow-md">
                    Whatever your journey, we’ve got the perfect car for you.
                </p>
            </div>
        </div>
    );
}