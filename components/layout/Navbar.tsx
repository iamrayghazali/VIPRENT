"use client";
import {motion, AnimatePresence} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {FiMenu, FiX, FiHome, FiInfo, FiCalendar} from "react-icons/fi";
import engFlag from "../../public/hero/eng-flag.svg"
import hunFlag from "../../public/hero/hun-flag.svg"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Drawer} from "@/components/ui/drawer";
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton";


export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef(null);
    const [lang, setLang] = useState("ENG");

    const isCurrentPageHome = pathname === "/";
    const isCurrentPageCars = pathname.startsWith("/cars");
    const isCurrentPageAbout = pathname === "/about";
    const isCurrentPageReserve = pathname === "/reserve";

    useEffect(() => {
        function handleClickOutside(e: { target: any; }) {
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
        <motion.nav
            ref={navRef}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
            className={`max-w-[1440px] absolute top-0 left-1/2 -translate-x-1/2 z-50 w-full flex items-center flex-wrap transition-all duration-300 ease-out text-white pt-4 ${mobileOpen ? "bg-black/60 backdrop-blur-md shadow-lg" : ""}`}>
            {/* Logo */}
            <Link
                className="text-5xl font-italy hover:cursor-pointer flex-shrink-0 md:self-start w-1/2 flex justify-start lg:flex-1 ml-10"
                href="/">viprent</Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex mx-auto gap-5 items-center lg:flex-2">
                <CustomButton type={isCurrentPageHome ? "primary" : "ghost"} path="/">
                Home
                </CustomButton>

                <CustomButton type={isCurrentPageCars ? "primary" : "ghost"} path="/cars">
                    Cars
                </CustomButton>

                <CustomButton type={isCurrentPageAbout ? "primary" : "ghost"} path="/about">
                    About us
                </CustomButton>

                <CustomButton type={isCurrentPageReserve ? "primary" : "ghost"} path="/reserve">
                    Reserve
                </CustomButton>


                <Select value={lang} onValueChange={setLang}>
                    <SelectTrigger className="w-[130px] border-[0.1] cursor-pointer relative flex items-center">
                        <Image
                            src={hunFlag}
                            alt=""
                            width={26}
                            height={26}
                            className={`${lang === 'HUN' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
                        />
                        <Image
                            src={engFlag}
                            alt=""
                            width={26}
                            height={26}
                            className={`${lang === 'ENG' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 absolute left-3`}
                        />
                        <SelectValue placeholder={lang} className="text-secondary ml-2"/>
                    </SelectTrigger>

                    <SelectContent className="cursor-pointer">
                        <SelectItem value="ENG" onSelect={() => setLang("ENG")}>ENG</SelectItem>
                        <SelectItem value="HUN" onSelect={() => setLang("HUN")}>HUN</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Open, Close CustomButton */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden ml-auto flex-shrink-0 flex justify-end text-white text-3xl p-2 pr-10 focus:outline-none transition-transform duration-300">
                   <span
                       className={`block transition-transform duration-300 ${mobileOpen ? "rotate-90 scale-110" : ""}`}>
                       {mobileOpen ? <FiX/> : <FiMenu/>}
                   </span>
            </button>

            {/* Mobile Hamburger */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        className="lg:hidden relative left-0 z-50 overflow-hidden w-full max-h-80 sm:max-h-90 sm:pl-15 pl-5 pt-3 transition-transform duration-300 "
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <Drawer open={mobileOpen} onOpenChange={setMobileOpen} side="left">
                            <div className="flex flex-col justify-center h-full text-white gap-6 pl-5 top-0">
                                {[
                                    {href: "/", icon: <FiHome/>, label: "Home", isActive: isCurrentPageHome},
                                    {href: "/cars", icon: <FiHome/>, label: "Cars", isActive: isCurrentPageCars},
                                    {href: "/about", icon: <FiInfo/>, label: "About us", isActive: isCurrentPageAbout},
                                    {
                                        href: "/reserve",
                                        icon: <FiCalendar/>,
                                        label: "Reserve",
                                        isActive: isCurrentPageReserve
                                    },
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
                                            className={`flex items-center gap-4 font-lato text-nowrap ${item.isActive ? "text-accent" : "text-white"}`}
                                        >
                                            {item.icon}
                                            <p>
                                                {item.label}
                                            </p>
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    variants={itemVariants}
                                >
                                    <Select value={lang} onValueChange={setLang}>
                                        <SelectTrigger
                                            className="w-[130px] border-[0.1] cursor-pointer relative flex items-center">
                                            <Image
                                                src={hunFlag}
                                                alt=""
                                                width={26}
                                                height={26}
                                                className={`${lang === 'HUN' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
                                            />
                                            <Image
                                                src={engFlag}
                                                alt=""
                                                width={26}
                                                height={26}
                                                className={`${lang === 'ENG' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 absolute left-3`}
                                            />
                                            <SelectValue placeholder={lang} className="text-secondary ml-2"/>
                                        </SelectTrigger>

                                        <SelectContent className="cursor-pointer">
                                            <SelectItem value="ENG" onSelect={() => setLang("ENG")}>ENG</SelectItem>
                                            <SelectItem value="HUN" onSelect={() => setLang("HUN")}>HUN</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </motion.div>
                            </div>
                        </Drawer>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}