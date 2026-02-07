"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {FlipWords} from "@/components/ui/flip-words";
import {TextHoverEffect} from "@/components/ui/text-hover-effect";


export default function AboutHero() {
    return (
        <div className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden">
            {/* Background image with fade-in */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
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
        </div>
    )
}