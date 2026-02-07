"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CarsHero() {
    return (
        <div className="relative w-full min-h-[40vh] md:min-h-screen overflow-hidden">
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
            <div className="absolute inset-0 flex md:justify-center items-end px-6 text-center md:pb-50 pb-20">
                <h1 className="mt-4 max-w-2xl text-xl md:text-3xl text-accent drop-shadow-lg font-bold">
                    Choose from our wide selection of sports, luxury, and comfortable vehicles at affordable prices.
                </h1>
            </div>
        </div>
    );
}