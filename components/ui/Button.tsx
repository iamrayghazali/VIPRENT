import Link from "next/link";
import { ReactNode } from "react";

type ButtonType = "primary" | "secondary";

type ButtonProps = {
    type?: ButtonType;
    path: string;
    children: ReactNode;
    className?: string;
};

export default function Button({
                                   type = "primary",
                                   path,
                                   children,
                                   className = "",
                               }: ButtonProps) {
    return (
        <Link
            href={path}
            className={`${type === "secondary" ? "hover:bg-white hover:text-black border-[0.5px] border-white" : "bg-primary hover:bg-red-dark "} font-light text-white px-5 py-2 rounded-lg transition-all duration-300 hover:cursor-pointer hover:scale-150 active:scale-95 active:translate-y-[1px]
                ${className}`}>
            {children}
        </Link>
    );
}