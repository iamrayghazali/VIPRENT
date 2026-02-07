import CARS from "@/lib/cars";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CarHero from "@/components/sections/car/CarHero";
import FloatingCallButton from "@/components/ui/FloatingContactButton";

interface CarPageProps {
    params: { slug: string };
}

export default async function CarPage({ params }: CarPageProps) {
    const { slug } = await params;

    const car = CARS.find(
        (c) => c.slug.toLowerCase() === slug.toLowerCase()
    );

    if (!car) return <div>Car not found</div>;

    return (
        <main className="bg-black w-full flex flex-col items-center">
            <div className="flex flex-col max-w-[1440px] mx-auto w-full">
                <Navbar />
                <FloatingCallButton></FloatingCallButton>

                <CarHero car={car} />
                <Footer />
            </div>
        </main>
    );
}