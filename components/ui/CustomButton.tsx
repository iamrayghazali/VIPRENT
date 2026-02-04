import Link from "next/link";
import {ReactNode} from "react";

type ButtonType = "primary" | "secondary" | "ghost";

type CustomButtonProps = {
    type?: ButtonType;
    path: string;
    children: ReactNode;
    className?: string;
};

export default function CustomButton({
                                   type = "primary",
                                   path,
                                   children,
                                   className = "",
                               }: CustomButtonProps) {
    return (
        <Link
            href={path}
            className={`${type === "secondary"
                ? "hover:bg-white hover:text-black border border-white"
                : type === "ghost" ? "transition-colors duration-300 bg-transparent hover:text-accent " : "bg-accent hover:bg-red-dark"}
                text-nowrap font-light text-white px-5 py-1.5 rounded-lg transition-all duration-300 hover:cursor-pointer active:scale-95 active:translate-y-[1px] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50
                ${className}`}>
            {children}
        </Link>
    );
}