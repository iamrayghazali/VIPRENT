import {WobbleCard} from "@/components/ui/wobble-card";
import {IoMdCheckmark} from "react-icons/io";
import Button from "@/components/ui/Button";


const MINIBUS_PATH = "/cars/mercedes-v-class-minibus";
const CAR_TAGS = ["7 seats", "Automatic", "7 seats", "7 seats"]
export default function MinibusSection() {

    return (
        <>
            <section className="bg-black max-w-[1080px] mx-auto mt-50">
                <div className="flex flex-col text-white  mb-8">
                    <h2 className=" text-3xl">Need More Space?</h2>
                </div>
                <div className="grid md:grid-rows-2 grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto w-full p-5">
                    <WobbleCard
                        containerClassName="col-span-1 min-h-[400px] lg:min-h-[300px] relative"
                        className=" grid grid-cols-1 md:grid-cols-2 order-1 hover:cursor-pointer"
                        href={MINIBUS_PATH}
                    >
                        {/* Background image layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url(/gallery/mercedes-v-class-minibus.webp)",
                            }}
                        />

                        {/* Dark overlay for readability */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 sm:via-black/30 sm:to-black/20"/>

                        {/* Content */}
                    </WobbleCard>
                    <WobbleCard
                        containerClassName="col-span-1 min-h-[400px] lg:min-h-[300px] relative bg-black"
                        className=" grid grid-cols-1 hover:cursor-pointer order-2 bg-black border-gray-700 border-2 rounded-4xl"
                        href={MINIBUS_PATH}
                    >

                        {/* Content */}
                        <div className="relative z-10  flex flex-col h-full">
                            <span className="text-accent text-sm font-extrabold">
                              FULL EXTRA
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-lato font-extrabold text-white text-nowrap">
                                Mercedes V Class
                            </h2>

                            <p className="mt-2 text-sm text-neutral-200">
                                Luxury and comfort with this automatic transmission 7 person conference minibus.
                            </p>
                        </div>

                        {/* TAGS */}
                        <ul className="text-white flex flex-wrap gap-2 h-fit">
                            {CAR_TAGS.map((tag, index) => (
                                <li key={index}
                                    className="text-sm border-1 border-gray-700 rounded-lg py-1 px-3 text-nowrap max-h-10">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </WobbleCard>
                    <WobbleCard
                        containerClassName="col-span-1 order-4 lg:order-3 border border-accent min-h-[400px] lg:min-h-[300px] relative rounded-2xl overflow-hidden"
                        className="grid grid-cols-1 hover:cursor-pointer"
                        href={MINIBUS_PATH}
                    >
                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                            <span className="text-neutral-300 text-sm mb-2">
                              30 days
                            </span>

                            {/* Price */}
                            <div className="flex items-end gap-1">
                                <h2 className="text-3xl text-accent font-lato font-extrabold whitespace-nowrap">
                                    1 599 000 Ft
                                </h2>
                                <p className="text-lg ml-2 text-neutral-300 font-lato whitespace-nowrap">
                                    + VAT
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="mt-6 flex flex-col gap-3 font-lato text-white">
                                <li className="flex items-start gap-2">
                                    <IoMdCheckmark className="text-green-600 text-xl shrink-0 mt-[2px]"/>
                                    <span>Short or Long term</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <IoMdCheckmark className="text-green-600 text-xl shrink-0 mt-[2px]"/>
                                    <span>Nationwide Vignette</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <IoMdCheckmark className="text-green-600 text-xl shrink-0 mt-[2px]"/>
                                    <span>COSTCO insurance</span>
                                </li>
                            </ul>

                            <div className="mt-5 pt-6">
                                <Button type="primary" path={MINIBUS_PATH}>
                                    Reserve
                                </Button>
                                <Button type="secondary" path={MINIBUS_PATH }>
                                    Reserve
                                </Button>
                            </div>
                        </div>

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 sm:via-black/30 sm:to-black/20"/>
                    </WobbleCard>
                    <WobbleCard
                        containerClassName=" md:grid-cols-2 order-3 col-span-1 min-h-[400px] lg:min-h-[300px] relative"
                        className=" grid grid-cols-1 lg:order-4 hover:cursor-pointer"
                        href={MINIBUS_PATH}
                    >
                        {/* Background image layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url(/gallery/mercedes-v-class-minibus-interior.webp)",
                            }}
                        />

                        {/* Dark overlay for readability */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 sm:via-black/30 sm:to-black/20"/>

                    </WobbleCard>
                </div>
            </section>
        </>
    )
}