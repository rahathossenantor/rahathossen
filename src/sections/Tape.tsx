import Star from "@/assets/icons/star.svg";
import { Fragment } from "react";

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
      <div className="bg-gradient-to-r custom-gradient-bg -mx-1 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
            {
              [...new Array(3)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {
                    words.map((word) => (
                      <div key={word} className="inline-flex items-center gap-4">
                        <span className="text-nowrap font-extrabold uppercase text-sm text-gray-900">{word}</span>
                        <Star className="size-6 text-gray-900" />
                      </div>
                    ))
                  }
                </Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
