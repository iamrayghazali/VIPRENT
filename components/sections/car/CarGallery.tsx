"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {useEffect, useRef} from "react";

export default function CarGallery({ car }: { car: any }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

    useEffect(() => {
        if (!api) return
        api.on("select", () => setCurrent(api.selectedScrollSnap()))
    }, [api])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false)
            window.addEventListener("keydown", handleEsc)
            return () => {
                document.body.style.overflow = "unset"
                window.removeEventListener("keydown", handleEsc)
            }
        }
    }, [isOpen])

    return (
        <div className="flex flex-col mx-auto w-full items-center mt-20">
            <div className="flex flex-col text-white mb-8">
                <h2 className="text-3xl">Gallery</h2>
            </div>
            {/* Standard Gallery */}
            <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="w-full max-w-[18rem] sm:max-w-xl"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {car.carouselImages.map((carImage: any, index: number) => (
                        <CarouselItem key={index}>
                            <Card
                                className="cursor-zoom-in border-none bg-transparent"
                                onClick={() => setIsOpen(true)}
                            >
                                <CardContent className="flex aspect-square items-center justify-center p-0 bg-tertiary overflow-hidden rounded-xl">
                                    <Image
                                        src={carImage}
                                        alt={`${car.name} image ${index + 1}`}
                                        width={400}
                                        height={400}
                                        className="object-contain w-full h-full"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 md:-left-12 bg-white/20 text-white border-none hover:bg-white/40 hover:cursor-pointer" />
                <CarouselNext className="right-4 md:-right-12 bg-white/20 text-white border-none hover:bg-white/40 hover:cursor-pointer" />
            </Carousel>

            {/* Fullscreen Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10">
                    <Button
                        variant="ghost"
                        className="absolute top-5 right-5 text-white hover:bg-white/10 z-[110]"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="h-8 w-8" />
                    </Button>

                    <Carousel
                        opts={{ startIndex: current }} // Syncs with the main gallery
                        className="w-full h-full max-w-6xl"
                    >
                        <CarouselContent>
                            {car.carouselImages.map((carImage: any, index: number) => (
                                <CarouselItem key={index} className="flex items-center justify-center">
                                    <div className="relative w-full h-[80vh]">
                                        <Image
                                            src={carImage}
                                            alt={`${car.name} full view ${index + 1}`}
                                            fill
                                            className="object-contain"
                                            sizes="100vw"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 md:-left-6 bg-white/20 text-white border-none hover:bg-white/40 hover:cursor-pointer" />
                        <CarouselNext className="right-4 md:-right-6 bg-white/20 text-white border-none hover:bg-white/40 hover:cursor-pointer" />
                    </Carousel>
                </div>
            )}
        </div>
    )
}