"use client";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {FaAngleDown} from "react-icons/fa6";
import Fleet from "@/components/ui/Fleet";
import FilterTag from "@/components/ui/FilterTag";

const FILTER_CATEGORIES = ["5+ Seats", "SUV", "Cabrio", "Combi"];
type TransmissionFilter = "all" | "manual" | "automatic";


export default function FleetSection() {

    const [openFilterTab, setOpenFilterTab] = useState(true);

    /*FILTERS*/
    const [activeFilters, setActiveFilters] = useState([]);

    const [filterIsMoreThanFiveSeatsActive, setFilterIsMoreThanFiveSeatsActive] = useState(false);
    const [filterIsSUVActive, setFilterIsSUVActive] = useState(false);
    const [filterIsCabrioActive, setFilterIsCabrioActive] = useState(false);
    const [filterIsCombiActive, setFilterIsCombiActive] = useState(false);
    const [transmissionFilter, setTransmissionFilter] = useState<TransmissionFilter>("all");

    useEffect(() => {
            let res = [];
            if (filterIsMoreThanFiveSeatsActive) {
                res.push("5+ Seats")
            }
            if (filterIsSUVActive) {
                res.push("SUV")
            }
            if (filterIsCabrioActive) {
                res.push("Cabrio")
            }
            if (filterIsCombiActive) {
                res.push("Combi")
            }
            setActiveFilters(res);
    }, [filterIsMoreThanFiveSeatsActive, filterIsSUVActive, filterIsCabrioActive, filterIsCombiActive]);

    return (
        <div className="w-full p-3 grid md:grid-cols-[1fr_2fr] grid-cols-1">
            <div className=" flex flex-col h-full ">
                {/* TITLE */}
                <div className="p-5">
                    <span className="text-accent text-sm font-extrabold">
                         All cars
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-lato font-extrabold text-white text-nowrap">
                        Our Fleet
                    </h2>
                </div>

                {/* FILTERS */}
                <div className={`px-5 py-1 mb-5 md:w-xs justify-self-center  rounded-lg ${openFilterTab ? "border-1 border-accent bg-tertiary pb-8" : "border-1 border-white"}`}>
                    <div
                        className="flex items-center gap-2 cursor-pointer select-none"
                        onClick={() => setOpenFilterTab(!openFilterTab)}
                    >
                        <span className="p-2 pl-0 text-2xl font-extrabold text-white">
                            Filters
                        </span>

                        <motion.span
                            animate={{ rotate: openFilterTab ? 180 : 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="text-md ml-auto text-white"
                        >
                            <FaAngleDown />
                        </motion.span>
                    </div>


                    <AnimatePresence>
                        {openFilterTab && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="overflow-hidden"
                            >
                                {/* CATEGORIES */}
                                <span className="text-neutral-400 text-lg">Categories</span>
                                <div className="grid grid-cols-2 gap-1 mt-4 text-sm">
                                    <FilterTag
                                        text="5 + seats"
                                        active={filterIsMoreThanFiveSeatsActive}
                                        onToggle={() => setFilterIsMoreThanFiveSeatsActive(prev => !prev)}
                                    />
                                    <FilterTag
                                        text="SUV"
                                        active={filterIsSUVActive}
                                        onToggle={() => setFilterIsSUVActive(prev => !prev)}
                                    />
                                    <FilterTag
                                        text="Cabrio"
                                        active={filterIsCabrioActive}
                                        onToggle={() => setFilterIsCabrioActive(prev => !prev)}
                                    />
                                    <FilterTag
                                        text="Combi"
                                        active={filterIsCombiActive}
                                        onToggle={() => setFilterIsCombiActive(prev => !prev)}
                                    />
                                </div>

                                <div className="border-t border-neutral-800 mb-10 mt-4"/>

                                {/* TRANSMISSION */}
                                <span className="text-neutral-400 text-lg">Transmission</span>
                                <div className="grid grid-rows-3 gap-1 mt-4 text-sm">
                                    <p onClick={() => setTransmissionFilter("all")}
                                       className={`py-1.5 rounded-md transition-all duration-400 ease-out
                                bg-black text-white select-none border-2
                                ${transmissionFilter === "all"
                                           ? "border-white"
                                           : "border border-accent-dark"}
                                text-center hover:cursor-pointer`}>
                                        All
                                    </p>
                                    <p onClick={() => setTransmissionFilter("manual")}
                                       className={`py-1.5 rounded-md transition-all duration-400 ease-out
                                  bg-black text-white select-none border-2
                                  ${transmissionFilter === "manual"
                                           ? "border-white"
                                           : "border border-accent-dark"}
                                  text-center hover:cursor-pointer`}>
                                        Manual
                                    </p>

                                    <p onClick={() => setTransmissionFilter("automatic")}
                                       className={`py-1.5 rounded-md transition-all duration-400 ease-out
                              bg-black text-white select-none border-2
                                ${transmissionFilter === "automatic"
                                           ? "border-white"
                                           : "border border-accent-dark"}
                                text-center hover:cursor-pointer`}>
                                        Automatic
                                    </p>
                                </div>

                                {/*      SLIDER
                    <div className="mt-5 flex flex-col">
                        <span className="text-neutral-400 text-lg">Price</span>
                        <input type="range" min={0} max={100} value={priceValue} className="range range-accent accent-accent range-xs w-full" />
                        <div className="grid grid-cols-2 gap-1 mt-2">
                            <input type="text" placeholder="Min." className="input input-ghost text-white placeholder-neutral-400" />
                            <input type="text" placeholder="Max." className="input input-ghost text-white placeholder-neutral-400" />
                        </div>
                    </div>*/}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="">
                <Fleet activeFilters={activeFilters} />
            </div>

        </div>
    )
}