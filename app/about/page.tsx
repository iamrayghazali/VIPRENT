import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import FAQ from "@/components/sections/about/FAQ";
import {WobbleCard} from "@/components/ui/wobble-card";
import FloatingCallButton from "@/components/ui/FloatingContactButton";



export const metadata = {
    title: "About VIPRENT",
    description: "Luxury and sports car rental company.",
};

export default function About() {
    return (
        <main className="bg-black w-full flex flex-col items-center">
            <div className="flex flex-col max-w-[1440px] mx-auto w-full">
                <Navbar />
                <FloatingCallButton></FloatingCallButton>

                <FAQ />
                <div className=" mx-auto">
                    <WobbleCard href="https://www.google.com/maps?ll=47.486423,18.988759&z=16&t=m&hl=hu&gl=HU&mapclient=embed&cid=15391185408085169483" className="">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.179190869128!2d18.98618417606135!3d47.486422471179154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dfd33c9bd75b%3A0xd59879952917954b!2sVIP%20Rent%20-%20Luxusaut%C3%B3%20b%C3%A9rl%C3%A9s%20Budapest!5e0!3m2!1shu!2shu!4v1770225682409!5m2!1shu!2shu"
                            width="450" height="250" allowFullScreen={false} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </WobbleCard>
                </div>

                <Footer/>
            </div>
        </main>
    )
}