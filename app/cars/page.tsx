import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CarsHero from "@/components/sections/cars/CarsHero";
import FleetSection from "@/components/sections/cars/FleetSection";



export const metadata = {
    title: "Cars VIPRENT",
    description: "Luxury and sports car rental company.",
};

export default function Cars() {
    return (
        <main className="bg-black w-full flex flex-col items-center">
            <div className="flex flex-col max-w-[1440px] mx-auto w-full">
                <Navbar />
                <CarsHero />
                <FleetSection />
                <Footer />
            </div>
        </main>
    )
}