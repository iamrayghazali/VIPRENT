"use client";
import { motion, AnimatePresence } from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {FiMenu, FiX, FiHome, FiInfo, FiCalendar} from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import engFlag from "../../public/hero/eng-flag.svg"
import hunFlag from "../../public/hero/hun-flag.svg"

import {Drawer} from "@/components/ui/drawer";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef(null); // <-- ref for nav
    const [lang, setLang] = useState("ENG");

    const isHome = pathname === "/";
    const isCars = pathname.startsWith("/cars");
    const isAbout = pathname === "/about";
    const isReserve = pathname === "/reserve";

    useEffect(() => {
        function handleClickOutside(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setMobileOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const menuVariants = {
        closed: {
            height: 0,
            transition: {
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1],
                when: "afterChildren",
            },
        },
        open: {
            height: "20rem",
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                when: "beforeChildren",
                staggerChildren: 0.08,
                delayChildren: 0.01,
            },
        },
    };

    const itemVariants = {
        closed: {
            opacity: 0,
            x: -20,
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.15,
                ease: "easeOut",
            },
        },
    };

    return (
        <nav
            ref={navRef}
            className={`p-4 text-white flex items-center relative w-full overflow-hidden ${mobileOpen ? "grid grid-cols-2 grid-rows-[auto_1fr]" : ""}`}>

            {/* Logo */}
            <Link className="text-5xl font-italy hover:cursor-pointer flex-shrink-0 md:self-start w-1/2 flex justify-start lg:flex-1" href="/">viprent</Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex mx-auto gap-5 items-center lg:flex-3">
                <Link
                    href="/"
                    className={`px-5 py-1 rounded-md transition-transform duration-200 active:scale-95 active:translate-y-[1px] hover:cursor-pointer ${
                        isHome ? "bg-accent" : "hover:text-accent"
                    }`}
                >
                    Home
                </Link>

                <Link
                    href="/cars"
                    className={`px-5 py-1 rounded-md transition-transform duration-200 active:scale-95 active:translate-y-[1px] hover:cursor-pointer ${
                        isCars ? "bg-accent" : "hover:text-accent"
                    }`}
                >
                    Cars
                </Link>

                <Link
                    href="/about"
                    className={`px-5 py-2 rounded-md transition-transform duration-200 active:scale-95 active:translate-y-[1px] hover:cursor-pointer text-nowrap ${
                        isAbout ? "bg-accent" : "hover:text-accent"
                    }`}
                >
                    About us
                </Link>

                <Link
                    href="/reserve"
                    className={`px-5 py-2 rounded-md text-secondary hover:text-accent transition-colors duration-200 hover:cursor-pointer`}
                >
                    Reserve
                </Link>


                <div className="rounded-md bg-secondary grid grid-cols-[1fr_2fr_1fr] w-28 h-10  hover:cursor-pointer">
                    <img src={lang === "ENG" ? engFlag : hunFlag} alt="" className="max-w-8" />
                    <p className="text-center text-primary">ENG</p>
                    <FaAngleDown />
                </div>
            </div>

            {/* Open, Close Button */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden ml-auto flex-shrink-0 flex justify-end text-white text-3xl p-2 focus:outline-none transition-transform duration-300">
                   <span className={`block transition-transform duration-300 ${mobileOpen ? "rotate-90 scale-110" : ""}`}>
                       {mobileOpen ? <FiX/> : <FiMenu/>}
                   </span>
            </button>

            {/* Mobile Hamburger */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        className="lg:hidden relative left-0 z-50 overflow-hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <Drawer open={mobileOpen} onOpenChange={setMobileOpen} side="left">
                            <div className="flex flex-col justify-center h-full text-white gap-6 pl-5 top-0">
                                {[
                                    { href: "/", icon: <FiHome />, label: "Home" },
                                    { href: "/cars", icon: <FiHome />, label: "Cars" },
                                    { href: "/about", icon: <FiInfo />, label: "About us" },
                                    { href: "/reserve", icon: <FiCalendar />, label: "Reserve" },
                                ].map((item) => (
                                    <motion.div
                                        key={item.href}
                                        variants={itemVariants}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setTimeout(() => {
                                                setMobileOpen(false);
                                            }, 3000)}
                                            className="flex items-center gap-4 font-lato hover:text-accent text-nowrap"
                                        >
                                            {item.icon}
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </Drawer>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}