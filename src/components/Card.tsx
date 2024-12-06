import grain from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ children, className, ...other }: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={
                twMerge(
                    "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
                    className
                )
            }
            {...other}
        >
            <div
                className="absolute inset-0 opacity-5 -z-10"
                style={{
                    backgroundImage: `url(${grain.src})`,
                }}
            >
            </div>
            {children}
        </div>
    );
};

export default Card;
