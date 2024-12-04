import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Star from "@/assets/icons/star.svg";
import Sparkle from "@/assets/icons/sparkle.svg";
import memoji from "@/assets/images/memoji-computer.png";
import grain from "@/assets/images/grain.jpg";

const rings = [
  {
    id: 1,
    size: 620
  },
  {
    id: 2,
    size: 820
  },
  {
    id: 3,
    size: 1020
  },
  {
    id: 4,
    size: 1220
  }
];

const particles = [
  {
    id: 1,
    type: "star",
    size: 28,
    color: "emerald-300",
    orbit: 800,
    rotate: -72
  },
  {
    id: 2,
    type: "star",
    size: 12,
    color: "emerald-300",
    orbit: 500,
    rotate: 20
  },
  {
    id: 3,
    type: "star",
    size: 8,
    color: "emerald-300",
    orbit: 590,
    rotate: 98
  },
  {
    id: 4,
    type: "sparkle",
    size: 8,
    color: "emerald-300/20",
    orbit: 430,
    rotate: -14
  },
  {
    id: 5,
    type: "sparkle",
    size: 5,
    color: "emerald-300/20",
    orbit: 440,
    rotate: 79
  },
  {
    id: 6,
    type: "sparkle",
    size: 10,
    color: "emerald-300/20",
    orbit: 530,
    rotate: 178
  },
  {
    id: 7,
    type: "sparkle",
    size: 14,
    color: "emerald-300/20",
    orbit: 710,
    rotate: 144
  },
  {
    id: 8,
    type: "particle",
    size: 3,
    color: "emerald-300/20",
    orbit: 720,
    rotate: 85
  },
  {
    id: 9,
    type: "particle",
    size: 2,
    color: "emerald-300/20",
    orbit: 520,
    rotate: -41
  },
  {
    id: 10,
    type: "particle",
    size: 2,
    color: "emerald-300/20",
    orbit: 650,
    rotate: -5
  }
];

const Hero = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">

      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          style={{ backgroundImage: `url(${grain.src})` }}
          className="absolute inset-0 -z-30 opacity-5"
        ></div>

        {/* {
          rings.map((ring) => (
            <div key={ring.id} className={`hero-ring size-[${ring.size}px]`}></div>
          ))
        }

        {
          particles.map((particle) => (
            <HeroOrbit key={particle.id} orbit={particle.orbit} rotate={particle.rotate}>
              {
                particle.type === "star" ? (
                  <Star className={`size-${particle.size} text-${particle.color}`} />
                ) : particle.type === "sparkle" ? (
                  <Sparkle className={`size-${particle.size} text-${particle.color}`} />
                ) : (
                  <div className={`size-${particle.size} bg-${particle.color} rounded-full`} />
                )
              }
            </HeroOrbit>
          ))
        } */}

        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>

        <HeroOrbit orbit={800} rotate={-72}>
          <Star className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit orbit={500} rotate={20}>
          <Star className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit orbit={590} rotate={98}>
          <Star className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit orbit={430} rotate={-14}>
          <Sparkle className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit orbit={440} rotate={79}>
          <Sparkle className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit orbit={530} rotate={178}>
          <Sparkle className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit orbit={710} rotate={144}>
          <Sparkle className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit orbit={720} rotate={85}>
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit orbit={520} rotate={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit orbit={650} rotate={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memoji} alt="avatar" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg">
            <div className="size-2.5 bg-green-500 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-large"></div>
            </div>
            <p className="text-sm font-medium">Available for new projects</p>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl md:text-5xl text-center font-serif mt-8 tracking-wide">Building Exceptional User Experiences</h1>
          <p className="text-center mt-4 text-white/60 md:text-lg">I specialize in transforming designs into functional, high performing web applications. Let&apos;s discuss your next project</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 h-12 px-6 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
