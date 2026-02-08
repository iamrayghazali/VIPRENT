import Navbar from "@/components/layout/Navbar";
import HomeHero from "@/components/sections/home/HomeHero";
import WobbleCardSection from "@/components/sections/home/WobbleCardSection";
import InfiniteScrollSection from "@/components/sections/home/InfiniteScrollSection";
import MinibusSection from "@/components/sections/home/MinibusSection";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/ui/FloatingContactButton";



export default function Home() {


    return (
    <main className="bg-black w-full flex flex-col items-center">
        <div className="flex flex-col max-w-[1440px] mx-auto w-full">
            <Navbar />
            <FloatingCallButton></FloatingCallButton>
            <HomeHero />
            <WobbleCardSection />
            <InfiniteScrollSection />
            <MinibusSection />

            <Footer />
        </div>
    </main>
  );
}
