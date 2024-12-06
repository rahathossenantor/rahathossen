import Image, { StaticImageData } from "next/image";
import Card from "./Card";

type TTestimonialProps = {
    testimonial: {
        id: number;
        name: string;
        position: string;
        text: string;
        avatar: StaticImageData;
    };
};

const Testimonial = ({ testimonial }: TTestimonialProps) => {
    return (
        <Card className="max-w-xs p-6 md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
            <div className="flex items-center gap-4">
                <div className="size-14 rounded-full bg-gray-700 inline-flex items-center justify-center flex-shrink-0">
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full"
                    />
                </div>
                <div>
                    <h3 className="text-nowrap font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-white/40">{testimonial.position}</p>
                </div>
            </div>
            <p className="mt-4 text-sm md:text-base md:mt-6">{testimonial.text}</p>
        </Card>
    );
};

export default Testimonial;
