"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/about/FAQ";
import {WobbleCard} from "@/components/ui/wobble-card";
import FloatingCallButton from "@/components/ui/FloatingContactButton";
import CustomButton from "@/components/ui/CustomButton";
import {toast, Toaster} from "sonner"
import { IoLocationSharp } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { FaMapMarkedAlt } from "react-icons/fa";


/*export const metadata = {
    title: "About VIPRENT",
    description: "Luxury and sports car rental company.",
};*/

export default function About() {
    const address = "Budapest, Rácz Aladár út 150, 1121";

    const handleCopy = () => {
        if (typeof window !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(address)
                .then(() => {
                    console.log("Copied!")
                    toast.success("Address copied!", { position: "bottom-right" })
                })
                .catch(() => {
                    toast.error("Failed to copy address", { position: "bottom-right" })
                })
        } else {
            // Fallback for non-secure contexts (http) or very old browsers
            toast.error("Clipboard not available", { position: "bottom-right" })
        }
    }

    return (
        <main className="bg-black w-full flex flex-col items-center">
            <div className="flex flex-col max-w-[1440px] mx-auto w-full">
                <Navbar />
                <FloatingCallButton></FloatingCallButton>

                <div className="grid grid-cols-2 items-center mx-auto mt-50">
                    <div className="flex flex-col justify-self-start items-start">
                        <h2 className="text-2xl text-white">Find us</h2>
                        <h2 className="text-lg text-white flex flex-row gap-2 items-center mt-5 hover:cursor-pointer" onClick={handleCopy}><IoLocationSharp/>Budapest, Rácz Aladár út 150, 1121</h2>
                        <Toaster />

                        <div className="flex flex-row mt-10">
                            <CustomButton path={"https://maps.apple.com/place?place-id=IF837CB1E68962FBD&address=1121+Budapest%2C+District+XII%2C+R%C3%A1cz+Alad%C3%A1r+utca+150.%2C+Hungary&coordinate=47.4863478%2C18.9886599&name=VIP+Rent&_provider=9902"} type="secondary"><FaMapMarkedAlt/> Apple Maps</CustomButton>
                            <CustomButton path={"https://www.google.com/maps?ll=47.486423,18.988759&z=15&t=m&hl=hu&gl=HU&mapclient=embed&cid=15391185408085169483"} type="secondary"> <SiGooglemaps/> Google Maps</CustomButton>
                        </div>
                    </div>

                    <WobbleCard href="https://www.google.com/maps?ll=47.486423,18.988759&z=16&t=m&hl=hu&gl=HU&mapclient=embed&cid=15391185408085169483" className="">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.179190869128!2d18.98618417606135!3d47.486422471179154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dfd33c9bd75b%3A0xd59879952917954b!2sVIP%20Rent%20-%20Luxusaut%C3%B3%20b%C3%A9rl%C3%A9s%20Budapest!5e0!3m2!1shu!2shu!4v1770225682409!5m2!1shu!2shu"
                            width="450" height="350" allowFullScreen={false} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </WobbleCard>
                </div>
                <FAQ />


                <Footer/>
            </div>
        </main>
    )
}