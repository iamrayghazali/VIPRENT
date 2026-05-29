"use client";
import Navbar from "@/components/layout/Navbar";
import HomeHero from "@/components/sections/home/HomeHero";
import WobbleCardSection from "@/components/sections/home/WobbleCardSection";
import InfiniteScrollSection from "@/components/sections/home/InfiniteScrollSection";
import MinibusSection from "@/components/sections/home/MinibusSection";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingContactButton";
import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";
import cars from "@/lib/cars";
import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import * as React from "react";
import CarGallery from "@/components/sections/car/CarGallery";



export default function Home() {
    function formatPrice(value:  number | bigint) {
        return new Intl.NumberFormat("hu-HU").format(value);
    }

    const discountedCarsContent = cars
        .filter(car => car.isDiscounted)
        .map(car => ({
            title: car.carName,
            description: (
                <div className="mt-2 flex flex-col flex-1">
                    <CarGallery car={car} className="md:hidden"></CarGallery>
                        <div className="flex flex-col justify-center p-3 mb-8">
                            <span className="text-white text-sm font-extrabold">
                                30 days
                            </span>
                            {car.isDiscounted && car.discountedPrice30days ? (
                                <>
                                    <h2 className="text-lg font-lato text-neutral-200 text-nowrap line-through italic decoration-1">
                                        {formatPrice(car.price30days)} Ft
                                    </h2>
                                    <div className="flex flex-row items-center ">
                                        <h2 className="text-2xl font-lato text-accent text-nowrap">
                                            {formatPrice(car.discountedPrice30days)} Ft
                                        </h2>
                                        <p className="text-neutral-400 text-thin text-lg ml-2">
                                            + VAT
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-row items-center ">
                                    <h2 className="text-2xl font-lato text-accent text-nowrap">
                                        {formatPrice(car.price30days)} Ft
                                    </h2>
                                    <p className="text-neutral-400 text-thin text-lg ml-2">
                                        + VAT
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center justify-center mt-auto gap-5">
                            <CustomButton type="primary" path="/reserve" children="Reserve" />
                            <CustomButton type="secondary" path={`/cars/${car.slug}`} children="Car details" />
                        </div>
                    </div>
            ),
            content: (
                <div className="flex h-full w-full items-center justify-center text-white">
                    <Image
                        src={car.imagePath}
                        alt={car.carName}
                        className="h-full w-full object-cover rounded-md"
                    />
                </div>
            )
        }));

    return (
    <main className="bg-black w-full flex flex-col items-center overflow-hidden">
        <div className="flex flex-col max-w-[1440px] mx-auto w-full bg-curve-layout bg-[url('/bg/curvelines.svg')]">
            <Navbar />
            <FloatingCallButton></FloatingCallButton>
            <HomeHero />
            <WobbleCardSection />

            <div className=" bg-[url('/bg/curvelines.svg')]">


                <div className="flex flex-col text-white lg:ml-4 mb-8">
                    <h6 className="text-accent text-base">EXCLUSIVE</h6>
                    <h2 className=" text-3xl">Discounted Cars</h2>
                </div>
                <StickyScroll content={discountedCarsContent} />
            </div>

            <InfiniteScrollSection />
            <MinibusSection />

            <Footer />
        </div>
    </main>
  );
}
