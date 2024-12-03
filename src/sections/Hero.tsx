import Image from "next/image";
import memoji from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";

const Hero = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memoji} alt="avatar" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg">
            <div className="size-2.5 bg-green-500 rounded-full"></div>
            <p className="text-sm font-medium">Available for new projects</p>
          </div>
        </div>
        <h1 className="text-3xl text-center font-serif mt-8 tracking-wide">Building Exceptional User Experiences</h1>
        <p className="text-center mt-4 text-white/60">I specialize in transforming designs into functional, high performing web applications. Let&apos;s discuss your next project</p>
        <div className="flex flex-col items-center gap-4 mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 h-12 px-6 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
