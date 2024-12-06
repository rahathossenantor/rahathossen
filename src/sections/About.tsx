import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import book from "@/assets/images/book-cover.png";
import map from "@/assets/images/map.png";
import memoji from "@/assets/images/memoji-smile.png";
import AboutCardHeader from "@/components/AboutCardHeader";
import Technologies from "@/components/Technologies";
import Hobbies from "@/components/Hobbies";

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
              <Technologies
                wrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <Technologies
                className="mt-6"
                wrapperClassName="animate-move-right [animation-duration:30s]"
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
              <Hobbies />
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={map}
                alt="map"
                className="object-cover object-left-top w-full h-full"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-t custom-gradient-bg -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t custom-gradient-bg -z-10"></div>
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
