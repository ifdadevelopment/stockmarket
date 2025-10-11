import React from "react";
import {image} from "../../data"
const BADGES = [
  {
    alt: "Fan Favorite Badge 1",
    src: image.fanFav1,
    className: "lg:h-[63px] h-[36px]",
  },
  {
    alt: "Fan Favorite Badge 3",
    src: image.fanFav3,
    className: "lg:h-[72px] h-[41px]",
  },
  {
    alt: "Fan Favorite Badge 4",
    src: image.fanFav4,
    className: "lg:h-[100px] h-[71px]",
  },
];

const TILES = [
  { alt: "User story 6", src: image.Ed1 },
  { alt: "User story 1", src: image.Ed2 },
  { alt: "User story 3", src: image.Ed3 },
  { alt: "User story 5", src: image.Ed4 },
  { alt: "User story 2", src: image.Ed5 },
  { alt: "User story 4", src: image.Ed6 },
];

export default function EdVisorySection() {
  return (
    <section className="bg-home-page-gradient font-publicSans lg:py-[64px] py-[36px] w-full px-[28px] lg:px-[54px] text-white">
      <div className="max-w-[1150px] mx-auto flex lg:flex-row flex-col gap-x-[80px]">
        <div className="flex flex-col lg:justify-start justify-center">
          <h2 className="font-figtree font-bold lg:text-[44px] text-[28px] lg:leading-[54px] leading-[32px] lg:text-left text-center">
            The Ed-visory App with a Growing Fanbase
          </h2>

          <h3 className="font-publicSans lg:text-[18px] text-[14px] lg:leading-[28px] leading-[18px] lg:mt-[24px] mt-[20px] lg:text-left text-center">
            Join the buzz as our budding investors share
            <br className="lg:hidden" /> their views on the StockGro Experience
          </h3>

          <div className="flex lg:gap-x-[20px] gap-x-[25px] items-center mt-[26px] lg:mt-[45px] lg:justify-start justify-center">
            {BADGES.map((b) => (
              <div key={b.src}>
                <img
                  alt={b.alt}
                  loading="lazy"
                  decoding="async"
                  className={`${b.className} object-contain w-auto flex-shrink-0`}
                  src={b.src}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full max-w-[580px] lg:h-[280px] my-auto overflow-hidden mx-auto mt-[36px] lg:mt-auto">
          <div className="grid grid-cols-3 lg:gap-[36px] gap-x-[20px] gap-y-[20px] w-full h-full">
            {TILES.map((t) => (
              <div
                key={t.src}
                className="bg-white flex justify-center items-center lg:rounded-[15px] rounded-[8px] w-full h-full"
              >
                <img
                  alt={t.alt}
                  loading="lazy"
                  decoding="async"
                  className="lg:w-[160px] w-[100px] h-auto lg:rounded-[15px] rounded-[8px] object-contain"
                  src={t.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
