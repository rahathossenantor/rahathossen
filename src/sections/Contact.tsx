import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grain from "@/assets/images/grain.jpg";

const Contact = () => {
  return (
    <section className="pt-12 pb-16 lg:pt-20 lg:pb-24" id="contacts">
      <div className="container">
        <div className="bg-gradient-to-r custom-gradient-bg text-gray-900 py-8 px-10 text-center md:text-left rounded-xl relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grain.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something
                amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s
                connect and discuss how I can help you achieve
                your goals.
              </p>
            </div>
            <div>
              <button className="bg-gray-900 border border-gray-900 text-white h-12 px-6 inline-flex items-center gap-2 rounded-xl w-max">
                <span className="font-semibold text-nowrap">Contact Me</span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
