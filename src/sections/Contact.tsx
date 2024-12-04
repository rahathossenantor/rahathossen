import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grain from "@/assets/images/grain.jpg";

const Contact = () => {
  return (
    <div className="pt-12 pb-16">
      <div className="container">
        <div className="custom-gradient-bg text-gray-900 py-8 px-10 text-center rounded-xl relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grain.src})` }}
          ></div>
          <h2 className="font-serif text-2xl">Let&apos;s create something
            amazing together</h2>
          <p className="text-sm mt-2">Ready to bring your next project to life? Let&apos;s
            connect and discuss how I can help you achieve
            your goals.</p>
          <button className="bg-gray-900 text-white h-12 px-6 mt-8 inline-flex items-center gap-2 rounded-xl">
            <span className="font-semibold">Contact Me</span>
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
