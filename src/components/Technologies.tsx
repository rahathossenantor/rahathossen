import JavaScript from "@/assets/icons/square-js.svg";
import HTML from "@/assets/icons/html5.svg";
import CSS from "@/assets/icons/css3.svg";
import ReactJS from "@/assets/icons/react.svg";
import Chrome from "@/assets/icons/chrome.svg";
import GitHub from "@/assets/icons/github.svg";
import { twMerge } from "tailwind-merge";

const tools = [
    {
        id: 1,
        name: "JavaScript",
        icon: JavaScript
    },
    {
        id: 2,
        name: "HTML5",
        icon: HTML
    },
    {
        id: 3,
        name: "CSS3",
        icon: CSS
    },
    {
        id: 4,
        name: "React",
        icon: ReactJS
    },
    {
        id: 5,
        name: "Chrome",
        icon: Chrome
    },
    {
        id: 6,
        name: "GitHub",
        icon: GitHub
    }
];

type TTechnologiesProps = {
    className?: string;
    wrapperClassName?: string;
};

const Technologies = ({ className, wrapperClassName }: TTechnologiesProps) => {
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <div className={twMerge(
                "flex flex-none py-0.5 gap-6 pr-6",
                wrapperClassName
            )}>
                {tools.map((tool) => (
                    <div
                        key={tool.id}
                        className="inline-flex items-center gap-2 py-2 px-3 outline outline-white/10 rounded-lg"
                    >
                        <tool.icon className="size-10 fill-[url(#tech-icon-gradient)]" />
                        <svg className="size-0 absolute">
                            <linearGradient id="tech-icon-gradient">
                                <stop offset="0%" stopColor="rgb(110 231 183)" />
                                <stop offset="100%" stopColor="rgb(56 189 248)" />
                            </linearGradient>
                        </svg>
                        <span className="font-semibold">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
