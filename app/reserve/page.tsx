"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {useState} from "react";
import {DatePickerWithRange} from "@/components/ui/DatePickerWithRange";
import {DatePickerDemo} from "@/components/ui/DatePicker";
import FloatingCallButton from "@/components/ui/FloatingContactButton";

export default function Reserve() {
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();
    const [noDate, setNoDate] = useState();
    const [carSelected, setCarSelected] = useState();

    return (
        <main className="bg-black w-full flex flex-col items-center">
            <div className="flex flex-col max-w-[1440px] mx-auto w-full">
                <Navbar />
                <FloatingCallButton></FloatingCallButton>

                <div className="max-w-lg mx-auto mt-30">
                    <div className="flex items-center justify-center">
                        <div className="h-7 w-7 rounded-full bg-white text-center">
                            <span className="text-primary text-lg font-extrabold">1</span>
                        </div>
                        <div className="w-30 bg-white h-1"></div>
                        <div className="h-7 w-7 rounded-full bg-white text-center">
                            <span className="text-primary text-lg font-extrabold">2</span>
                        </div>
                        <div className="w-30 bg-white h-1"></div>
                        <div className="h-7 w-7 rounded-full bg-white text-center">
                            <span className="text-primary text-lg font-extrabold">3</span>
                        </div>
                    </div>
                    <div className="flex justify-between rounded-full text-center mt-5">
                        <span className="text-white">Choose car</span>
                        <span className="text-white">Select date</span>
                        <span className="text-white">Send</span>
                    </div>
                </div>
                <div className="md:w-lg w-md rounded-4xl border-2 border-tertiary h-50 mx-auto">

                    {/*checkbox*/}
                </div>
                <Footer />
            </div>
        </main>
    )
}