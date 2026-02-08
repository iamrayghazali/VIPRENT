import Image from "next/image";
import {FlipWords} from "@/components/ui/flip-words";
import {TextHoverEffect} from "@/components/ui/text-hover-effect";
import homeHeroCarBg from "../../../public/hero/home-hero-car-bg.svg"
import BG from "../../../public/gallery/mercedes-gls-63_3.jpg";

export default function HomeHero() {
    return (
        <section className="flex flex-col justify-center  min-h-screen ">
            <TextHoverEffect text="VIPRENT" className="text-wrap"></TextHoverEffect>
            {/*<Image src={BG} alt="BG" className="absolute top-0 h-screen"></Image>*/}
            {/*<FlipWords words={["LUXURY", "SPORT", "COMFORT"]}></FlipWords>*/}
        </section>
    );
}