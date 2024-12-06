import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import book from "@/assets/images/book-cover.png";
import map from "@/assets/images/map.png";
import memoji from "@/assets/images/memoji-smile.png";
import AboutCardHeader from "@/components/AboutCardHeader";
import Technologies from "@/components/Technologies";

const hobbies = [
  {
    id: 1,
    name: "Painting",
    emoji: "🎨",
    top: "5%",
    left: "5%"
  },
  {
    id: 2,
    name: "Photography",
    emoji: "📸",
    top: "5%",
    left: "50%"
  },
  {
    id: 3,
    name: "Hiking",
    emoji: "🥾",
    top: "40%",
    left: "35%"
  },
  {
    id: 4,
    name: "Gaming",
    emoji: "🎮",
    top: "35%",
    left: "10%"
  },
  {
    id: 5,
    name: "Music",
    emoji: "🎵",
    top: "45%",
    left: "70%"
  },
  {
    id: 6,
    name: "Fitness",
    emoji: "🏋️‍♂️",
    top: "65%",
    left: "5%"
  },
  {
    id: 7,
    name: "Reading",
    emoji: "📚",
    top: "70%",
    left: "45%"
  }
];

const About = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-16 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <AboutCardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={book} alt="book" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <AboutCardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <Technologies />
              <Technologies
                className="mt-6"
                wrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <AboutCardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="p-6"
              />
              <div className="relative flex-1">
                {
                  hobbies.map(hobby => (
                    <div
                      key={hobby.id}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-t from-emerald-300 to-sky-400 py-1.5 rounded-full absolute"
                      style={{
                        top: hobby.top,
                        left: hobby.left
                      }}
                    >
                      <span className="font-medium text-gray-950">{hobby.name}</span>
                      <span>{hobby.emoji}</span>
                    </div>
                  ))
                }
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={map}
                alt="map"
                className="object-cover object-left-top w-full h-full"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-t from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={memoji}
                  alt="memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
