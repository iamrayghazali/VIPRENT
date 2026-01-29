import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



export const metadata = {
    title: "About VIPRENT",
    description: "Luxury and sports car rental company.",
};

export default function About() {
    return (
        <main className="bg-black w-full flex flex-col items-center">
            <div className="flex flex-col max-w-[1440px] mx-auto w-full">
                <Navbar />


                <Footer />
            </div>
        </main>
    )
}