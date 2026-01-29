import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-neutral-300 px-6 md:px-16 py-12 mt-50">
            {/* Top section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:gap-10">

                {/* VIPRENT title */}
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <h3 className="text-2xl font-bold text-accent mb-5">VIPRENT</h3>
                    <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
                        Rent luxury, sport and comfortable cars at a reasonable price.
                    </p>
                </div>

                {/* Navigation + Contact container */}
                <div className="flex flex-row gap-10 md:gap-20 md:w-2/3">

                    {/* Navigation */}
                    <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-5">Navigation</h4>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="/" className="hover:text-accent transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/cars" className="hover:text-accent transition">
                                    Cars
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-accent transition">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-5">Contact</h4>
                        <p className="text-sm text-neutral-400 mb-3">info@viprent.hu</p>
                        <a href="tel:+36702777797" className="text-sm text-neutral-400 mb-10">+36-70-277-7797</a>
                        <a className="flex items-center gap-2 hover:text-white transition cursor-pointer mb-3" href={"https://www.facebook.com/luxusautoberles"} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-lg" />
                            <span className="text-sm">Facebook</span>
                        </a>
                    </div>

                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-800 my-10" />

            {/* Bottom section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
                <p>
                    © {new Date().getFullYear()} VIPRENT – Luxusautó kölcsönző Budapest
                </p>

                <div className="flex gap-4">
                    <Link href="/terms" className="hover:text-white transition">
                        Terms
                    </Link>
                    <Link href="/privacy" className="hover:text-white transition">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    );
}