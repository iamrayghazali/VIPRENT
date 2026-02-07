"use client";

import Image from "next/image";
import { motion } from "framer-motion";



export default function CarHero({ car }: {car: any}) {
    return (
        <section className="mt-20 relative max-w-[1440px] mx-auto w-full min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] xl:min-h-screen overflow-hidden">

            {/* Background Image */}
            <Image
                src={car.imagePath}
                alt={car.carName}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-black/95" />

            {/* Centered Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6"
            >
                <p className="text-accent text-lg font-extrabold mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                    {car.comment}
                </p>

                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                    {car.carName}
                </h1>

            </motion.div>

        </section>
    );
}