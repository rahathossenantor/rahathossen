import Star from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

type TAboutCardHeaderProps = {
    title: string;
    description: string;
    className?: string;
};

const AboutCardHeader = ({ title, description, className }: TAboutCardHeaderProps) => {
    return (
        <div className={twMerge("flex flex-col", className)}>
            <div className="inline-flex items-center gap-2">
                <Star className="size-9 text-emerald-300" />
                <h3 className="text-3xl font-serif">{title}</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">{description}</p>
        </div>
    );
};

export default AboutCardHeader;
