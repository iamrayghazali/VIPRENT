import CarTag from "@/components/ui/CarTag";
import {Key} from "react";
import {IoShieldOutline} from "react-icons/io5";
import {GiHungary} from "react-icons/gi";
import {CiLocationOn} from "react-icons/ci";
import {BsAirplane} from "react-icons/bs";

export default function CarDetails({ car }: { car: any })  {
    return (
        <div className="mt-10">
            <div className="m-4 md:m-20 ">
                <div className="flex flex-col text-white lg:ml-4 mb-2 md:mb-8">
                    <h6 className="text-accent text-base">{car.carName}</h6>
                    <h2 className=" text-3xl">Car Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] md:ml-8 p-4">
                    <ul className="flex flex-wrap gap-3 text-neutral-200 ">
                        {car.tags.map((tag: any, index: number) => (
                            <CarTag text={tag} key={index}/>
                        ))}
                    </ul>
                    <div className=" text-left max-w-md pt-5 md:pt-0">
                        <p className="text-neutral-300 text-sm md:pt-0 md:text-base md:pl-6">Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 md:gap-2 md:grid-cols-4 mt-8 md:mt-30">
                    <div className="flex flex-col items-center justify-center text-base text-center text-neutral-200">
                        <IoShieldOutline className="h-10 w-10 text-accent m-2"/>
                        <h4 className="text-white font-thin">COSCO on all cars</h4>
                    </div>
                    <div className="flex flex-col items-center justify-center text-base text-center text-neutral-200">
                        <GiHungary className="h-10 w-10 text-accent m-2"/>
                        <h4 className="text-white font-thin">Nationwide Vignette</h4>
                    </div>
                    <div className="flex flex-col items-center justify-center text-base text-center text-neutral-200">
                        <CiLocationOn className="h-10 w-10 text-accent m-2"/>
                        <h4 className="text-white font-thin">Order Car to <br/> Your Location</h4>
                    </div>
                    <div className="flex flex-col items-center justify-center text-base text-center text-neutral-200">
                        <BsAirplane className="h-10 w-10 text-accent m-2"/>
                        <h4 className="text-white font-thin">Airport pickup <br/>and drop off</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

