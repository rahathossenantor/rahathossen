import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Star from "@/assets/icons/star.svg";
import Sparkle from "@/assets/icons/sparkle.svg";
import memoji from "@/assets/images/memoji-computer.png";
import grain from "@/assets/images/grain.jpg";
import LinkPreviewWrapper from "@/components/LinkPreviewWrapper";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">

      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          style={{ backgroundImage: `url(${grain.src})` }}
          className="absolute inset-0 -z-30 opacity-5"
        ></div>

        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>

        <HeroOrbit
          orbit={430}
          rotate={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
        >
          <Sparkle className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          orbit={440}
          rotate={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
        >
          <Sparkle className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          orbit={500}
          rotate={20}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
        >
          <Star className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          orbit={520}
          rotate={-41}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
        >
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          orbit={530}
          rotate={178}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
        >
          <Sparkle className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          orbit={590}
          rotate={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
        >
          <Star className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          orbit={650}
          rotate={-5}
          shouldOrbit
          orbitDuration="42s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          orbit={710}
          rotate={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
        >
          <Sparkle className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          orbit={720}
          rotate={85}
          shouldOrbit
          orbitDuration="46s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          orbit={800}
          rotate={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
        >
          <Star className="size-28 text-emerald-300" />
        </HeroOrbit>

      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memoji} alt="avatar" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center justify-center gap-2 rounded-lg">
            <div className="size-2.5 bg-green-500 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-large"></div>
            </div>
            <p className="text-sm font-medium">Available for new projects</p>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl md:text-5xl text-center font-serif mt-8 tracking-wide">Building Exceptional User Experiences</h1>
          <p className="text-center mt-4 text-white/60 md:text-lg">I specialize in transforming designs into functional, high performing web applications. Let&apos;s discuss your next project.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/15 h-12 px-6 rounded-xl"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </Link>
          <LinkPreviewWrapper
            url="https://www.linkedin.com/in/rahathossenantor"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span className="font-semibold">Let&apos;s Connect</span>
            <span>🔗</span>
          </LinkPreviewWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
