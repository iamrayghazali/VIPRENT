"use client";
import {useState} from "react";

const FILTER_CATEGORIES = ["5+ Seats", "SUV", "Cabrio", "Combi"];
type TransmissionFilter = "all" | "manual" | "automatic";

export default function FleetSection() {

    const [filterIsTransmissionManual, setFilterTransmissionManual] = useState(true);
    const [transmissionFilter, setTransmissionFilter] =
        useState<TransmissionFilter>("all");


    return (
        <div className="w-full p-3 grid grid-cols-[1fr_2fr]">
            <div className=" flex flex-col h-full ">
                {/* FILTERS */}
                <div className="p-5 w-xs">
                    <span className="text-2xl font-extrabold text-white">Filters</span>
                    <div className="border-t border-neutral-800 mb-10 mt-4" />

                    {/* CATEGORIES */}
                    <span className="text-neutral-400 text-lg">Categories</span>
                    <div className="grid grid-cols-2 gap-1 mt-4">
                        {FILTER_CATEGORIES.map((item, index) => (
                            <label key={index} className="cursor-pointer">
                                {/* Hidden checkbox */}
                                <input type="checkbox" className="hidden peer" />
                                <span className="py-1.5 px-5 font-bold rounded-md text-center
                                   bg-white text-primary
                                   peer-checked:bg-accent peer-checked:text-white
                                   hover:cursor-pointer block transition-all duration-300 ease-out">
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>

                    <div className="border-t border-neutral-800 mb-10 mt-4" />

                    {/* TRANSMISSION */}
                    <span className="text-neutral-400 text-lg">Transmission</span>
                    <div className="grid grid-rows-3 gap-1 mt-4">
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

                </div>

            </div>
            <div>
            <span className="text-accent text-sm font-extrabold">
                     All cars
                </span>
                <h2 className="text-3xl lg:text-4xl font-lato font-extrabold text-white text-nowrap">
                    Fleet
                </h2>
            </div>

        </div>
    )
}