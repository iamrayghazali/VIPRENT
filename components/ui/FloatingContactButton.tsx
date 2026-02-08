"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Send } from "lucide-react";

export default function FloatingContactButton() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [iconToggle, setIconToggle] = useState(true); // true = Send, false = Call

    // Rotate icon every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIconToggle((prev) => !prev);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            {/* Floating Button */}
            <DialogTrigger className="text-white hover:cursor-pointer" asChild>
                <button
                    className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-accent border border-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
                >
                    <Phone className="w-6 h-6 text-white" />
                </button>
            </DialogTrigger>

            {/* Modal / Dialog */}
            <DialogContent className="sm:max-w-sm w-[90vw] bg-tertiary backdrop-blur-md border-none animate-in scale-100 fade-in-80">
                <DialogHeader>
                    <DialogTitle className="text-white text-lg">Contact Us</DialogTitle>
                    <DialogDescription className="text-md text-neutral-400">You can call us or leave a message</DialogDescription>
                </DialogHeader>

                <div className="flex flex-row items-center gap-4 mt-4">
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 justify-center  hover:cursor-pointer"
                        onClick={() => (window.location.href = "tel:+36123456789")}
                    >
                        <Phone className="w-4 h-4" /> Call
                    </Button>

                    <Button
                        variant="outline"
                        className="flex items-center gap-2 justify-center hover:cursor-pointer"
                        onClick={() => {
                            router.push("/reserve");
                            setOpen(false);
                        }}
                    >
                        <Send className="w-4 h-4" /> Message
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}