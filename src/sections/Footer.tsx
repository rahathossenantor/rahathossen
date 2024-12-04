import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const socials = [
  {
    id: 1,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rahathossenantor"
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/rahathossenantor"
  },
  {
    id: 3,
    name: "Facebook",
    link: "https://www.facebook.com/rahathossenantor"
  },
  {
    id: 4,
    name: "Instagram",
    link: "#"
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <p className="text-white/40">© 2024 All rights reserved.</p>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {
              socials.map(social => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  className="inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold">{social.name}</span>
                  <ArrowUpRight className="size-4" />
                </a>
              ))
            }
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
