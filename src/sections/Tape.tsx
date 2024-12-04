import Star from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable"
];

const Tape = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -mx-1 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {
              words.map((word) => (
                <div key={word} className="inline-flex items-center gap-4">
                  <span className="text-nowrap font-extrabold uppercase text-sm text-gray-900">{word}</span>
                  <Star className="size-6 text-gray-900 -rotate-12" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
