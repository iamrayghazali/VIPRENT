import {WobbleCard} from "@/components/ui/wobble-card";

const CAR1PATH = "/cars/mustang-gt-5";
const CAR2PATH = "/cars/mercedes-gls-63";

export default function WobbleCardSection() {

    return (
        <>
            <section className=" bg-black max-w-[1080px] mx-auto">
                <div className="flex flex-col text-white lg:ml-4 mb-8">
                    <h6 className="text-accent text-base">EXCLUSIVE</h6>
                    <h2 className=" text-3xl">Discounted Cars</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-5">
                    <WobbleCard
                        containerClassName="col-span-1 order-1 lg:col-span-2 min-h-[400px] lg:min-h-[300px] relative  hover:cursor-pointer"
                        className=" grid grid-cols-1 md:grid-cols-2"
                        href={CAR1PATH}
                    >
                        {/* Background image layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url(/gallery/mustang-gt-5.webp)",
                            }}
                        />

                        {/* Dark overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 sm:via-black/30 sm:to-black/20" />

                        {/* Content */}
                        <div className="relative z-10  flex flex-col justify-end h-full">
                            <span className="text-accent text-sm font-extrabold">
                              EXCLUSIVE
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-lato font-extrabold text-white text-nowrap">
                                Ford Mustang GT-5.0
                            </h2>

                            <p className="mt-2 text-sm text-neutral-400">
                                Convertable · V8 · Automatic
                            </p>
                        </div>
                    </WobbleCard>
                    <WobbleCard
                        containerClassName="col-span-1 order-2 min-h-[400px] lg:min-h-[300px] relative"
                        className=" grid grid-cols-1 md:grid-cols-2 hover:cursor-pointer"
                        href={CAR1PATH}
                    >
                        {/* Background image layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url(/gallery/mustang-gt-5_2.webp)",
                            }}
                        />

                        {/* Dark overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10" />
                        {/* Content */}
                        <div className="relative z-10  flex flex-col justify-end h-full">
                            <span className="text-neutral-200 text-sm mb-2">
                              30 days
                            </span>
                            <div className="flex">
                                <h2 className="text-xl text-accent font-lato font-extrabold  text-nowrap">
                                    899 900 Ft
                                </h2>
                                <p className="text-xl text-neutral-200 text-nowrap pl-1">
                                    + VAT
                                </p>
                            </div>
                        </div>
                    </WobbleCard>
                    <WobbleCard
                        containerClassName="col-span-1 lg:order-3 order-4 min-h-[400px] lg:min-h-[300px] relative"
                        className=" grid grid-cols-1 md:grid-cols-2  hover:cursor-pointer"
                        href={CAR2PATH}
                    >
                        {/* Background image layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url(/gallery/mercedes-gls-63_2.jpg)",
                            }}
                        />

                        {/* Dark overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10" />
                        {/* Content */}
                        <div className="relative z-10  flex flex-col justify-end h-full">
                            <span className="text-neutral-200 text-sm mb-2">
                              30 days
                            </span>
                            <div className="flex">
                                <h2 className="text-xl text-accent font-lato font-extrabold  text-nowrap">
                                    1 599 000 Ft
                                </h2>
                                <p className="text-xl text-neutral-200 text-nowrap pl-1">
                                    + VAT
                                </p>
                            </div>
                        </div>
                    </WobbleCard>
                    <WobbleCard
                        containerClassName="col-span-1 order-3 lg:order-4 lg:col-span-2 min-h-[400px] lg:min-h-[300px] relative"
                        className=" grid grid-cols-1 md:grid-cols-2 hover:cursor-pointer"
                        href={CAR2PATH}
                    >
                        {/* Background image layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url(/gallery/mercedes-gls-63.jpg)",
                            }}
                        />

                        {/* Dark overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 sm:via-black/30 sm:to-black/20" />

                        {/* Content */}
                        <div className="relative z-10  flex flex-col justify-end h-full">
                            <span className="text-accent text-sm font-extrabold">
                              EXCLUSIVE
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-lato font-extrabold text-white text-nowrap">
                                Ford Mustang GT-5
                            </h2>

                            <p className="mt-2 text-sm text-neutral-400">
                                Sport · V8 · Automatic
                            </p>
                        </div>
                    </WobbleCard>

                </div>
            </section>
        </>
    )
}