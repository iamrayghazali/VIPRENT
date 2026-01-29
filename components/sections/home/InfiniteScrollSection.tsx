"use client";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import { CiClock1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsAirplane } from "react-icons/bs";
import { IoShieldOutline } from "react-icons/io5";
import { GiHungary } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import {Separator} from "@/components/ui/separator";

export default function InfiniteScrollSection() {
    const included = [
        {
            icon: <CiClock1/>,
            title: "Short or Long term",
            descr: "Rent for 3 days, one week one month or a custom date of your choosing.",
        },
        {
            icon: <IoShieldOutline/>,
            title: "COSTCO",
            descr: "All our cars have COSTCO insurance.",
        },
        {
            icon: <GiHungary/>,
            title: "Nationwide Vignette",
            descr: "All of our cars have a nationwide highway vignette included in the price.",
        },
    ];

    const extra = [

        {
            icon: <CiUser/>,
            title: "Optional Driver",
            descr: "You can request a professional driver with the car of your choosing - additional fees apply.",
        },
        {
            icon: <BsAirplane/>,
            title: "Airport Pickup",
            descr: "You can request airport pickup or drop off.",
        },
        {
            icon: <CiLocationOn/>,
            title: "Car Location",
            descr: "You can request the car to be delivered to your location.",
        },
    ];

    return (
        <>
            <section className="flex flex-col lg:grid lg:grid-rows-2 mx-auto lg:mx-30 p-8 mt-50">
                <div className="justify-self-left">
                    <h6 className="text-md text-left lg:ml-25 md:ml-10 text-accent">
                        Included in the price of the car
                    </h6>
                    <h2 className="text-3xl text-left lg:ml-25 md:ml-10 text-white mb-8">
                        Included Features
                    </h2>

                    {/*Included in price*/}
                    <InfiniteMovingCards
                        items={included}
                        direction="right"
                        speed="fast"
                        pauseOnHover={true}
                    />
                </div>

                <div className="justify-self-end mt-12">
                    <h2 className="text-3xl md:text-center text-left lg:ml-25 md:ml-10 text-white mb-8">
                        Extra Features
                    </h2>

                    {/* Extra features */}
                    <InfiniteMovingCards
                        items={extra}
                        direction="right"
                        speed="normal"
                    />
                </div>
            </section>
        </>
    )
}