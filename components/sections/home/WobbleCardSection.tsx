import {WobbleCard} from "@/components/ui/wobble-card";

const CAR1PATH = "/cars/ford-mustang-gt";
const CAR2PATH = "/cars/mercedes-gls-63";

export default function WobbleCardSection() {

    return (
        <>
            <div className=" bg-black max-w-[1080px] md:mx-auto mx-4">
                <div className="flex flex-col text-white lg:ml-4 mb-8">
                    <h6 className="text-accent text-base">EXCLUSIVE</h6>
                    <h2 className=" text-3xl">Discounted Cars</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    <WobbleCard
                        containerClassName="col-span-1 order-1 lg:col-span-2  relative  hover:cursor-pointer"
                        className=" grid grid-cols-1 md:grid-cols-2"
                        href={CAR1PATH}
                        size="large"
                    >
                        {/* Background image layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url(/gallery/mustang-gt-5.webp)",
                            }}
                        />

                        {/* Dark overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10 sm:via-black/10 sm:to-black/10" />


                    </WobbleCard>
                    <div className="grid col-span-1 order-2">
                        <WobbleCard
                            containerClassName=" relative min-w-80"
                            className=" grid grid-cols-1 md:grid-cols-2 hover:cursor-pointer"
                            href={CAR1PATH}
                            size="small"
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

                        </WobbleCard>

                        {/* Content */}
                        <div className="relative z-10 pl-1 flex flex-col mt-auto">
                            <h2 className="text-2xl lg:text-3xl font-lato font-extrabold leading-tight text-white text-wrap">
                                Ford Mustang GT-5.0
                            </h2>

                            <p className="text-sm text-neutral-400 mt-1">
                                Convertable · V8 · Automatic
                            </p>
                            <div className="relative z-10 flex flex-col h-full mt-4">
                                <span className="text-neutral-200 text-md">
                                  30 days
                                </span>
                                <div className="flex">
                                    <h2 className="text-2xl text-accent font-lato font-extrabold text-nowrap">
                                        899 900 Ft
                                    </h2>
                                    <p className="text-2xl text-neutral-200 text-nowrap pl-1">
                                        + VAT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid col-span-1 order-4 md:order-3 md:mt-20 mt-0">
                        <WobbleCard
                            containerClassName=" relative min-w-80"
                            className=" grid grid-cols-1 md:grid-cols-2 hover:cursor-pointer"
                            href={CAR2PATH}
                            size="small"
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

                        </WobbleCard>

                        {/* Content */}
                        <div className="relative z-10 pl-1 flex flex-col mt-auto ">
                            <h2 className="text-2xl lg:text-3xl font-lato font-extrabold text-white ">
                                Mercedes GLS 63
                            </h2>

                            <p className=" text-sm text-neutral-400 mt-1">
                                Convertable · V8 · Automatic
                            </p>
                            <div className="relative z-10 flex flex-col h-full">
                                <span className="text-neutral-200 text-md mt-2">
                                  30 days
                                </span>
                                <div className="flex">
                                    <h2 className="text-2xl text-accent font-lato font-extrabold text-nowrap">
                                        899 900 Ft
                                    </h2>
                                    <p className="text-2xl text-neutral-200 text-nowrap pl-1">
                                        + VAT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <WobbleCard
                        containerClassName="col-span-1 order-3 md:order-4 lg:col-span-2 mt-20  relative  hover:cursor-pointer"
                        className=" grid grid-cols-1 md:grid-cols-2"
                        href={CAR1PATH}
                        size="large"
                    >
                        {/* Background image layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url(/gallery/mercedes-gls-63.jpg)",
                            }}
                        />

                        {/* Dark overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10 sm:via-black/10 sm:to-black/10" />
                    </WobbleCard>
                </div>
            </div>
        </>
    )
}