import Image, { StaticImageData } from "next/image";
import Card from "./Card";
import CheckCircle from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import LinkPreviewWrapper from "./LinkPreviewWrapper";

type TProjectProps = {
    idx: number;
    project: {
        id: number;
        company: string;
        year: string;
        title: string;
        results: {
            title: string;
        }[];
        link: string;
        image: StaticImageData;
    };
};

const Project = ({ idx, project }: TProjectProps) => {
    return (
        <Card
            className="px-8 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16 pb-0 sticky top-16"
            style={{
                top: `calc(62px + ${idx * 30}px)`,
            }}
        >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                    <div className="uppercase font-bold tracking-widest bg-gradient-to-r custom-gradient-bg text-sm text-transparent bg-clip-text inline-flex gap-2">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                    </div>
                    <h3 className="text-2xl mt-2 md:text-4xl md:mt-5 font-serif">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result) => (
                            <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                                <CheckCircle className="size-5 md:size-6" />
                                <span>{result.title}</span>
                            </li>
                        ))}
                    </ul>
                    <LinkPreviewWrapper
                        url={project.link}
                        width={340}
                        height={215}
                        className="h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 bg-white text-gray-950"
                    >
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="size-4" />
                    </LinkPreviewWrapper>
                </div>
                <div className="relative">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                </div>
            </div>
        </Card>
    );
};

export default Project;
