import Navbar from "@/components/layout/Navbar";
import HomeHero from "@/components/sections/home/HomeHero";
import WobbleCardSection from "@/components/sections/home/WobbleCardSection";
import {Separator} from "@/components/ui/separator";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import InfiniteScrollSection from "@/components/sections/home/InfiniteScrollSection";
import MinibusSection from "@/components/sections/home/MinibusSection";



export default function Home() {


    return (
    <main className="bg-black w-full flex flex-col items-center">
        <div className="flex flex-col max-w-[1440px] mx-auto w-full">
            <Navbar />

            <HomeHero />
            <WobbleCardSection />
            <InfiniteScrollSection />
            <MinibusSection />
            <div className="min-h-screen"></div>
        </div>
    </main>
  );
}
