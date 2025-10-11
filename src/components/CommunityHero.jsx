// CommunityHero.jsx
import React from "react";
import {image} from "../../data"
export default function CommunityHero({
  partnershipHref = "/partnership/",
  mascotSrc = image.mascotSrc,
  handSrc = image.handSrc,
}) {
  return (
    <section className="mx-auto relative font-publicSans overflow-hidden bg-home-page-gradient  text-white">
      <div className="lg:max-w-[800px] relative md:max-w-[380px] max-w-[300px] flex flex-col mx-auto lg:pt-[62px] lg:pb-[62px] pt-[40px] pb-[40px]">
        <h2 className="text-center lg:text-[38px] text-[18px] font-bold lg:mt-[44px] mt-[0px] lg:leading-[40px] leading-[22px]">
          Join a thriving community <br className="lg:hidden" />
          with millions of
          <br className="lg:hidden " /> trading enthusiasts
        </h2>

        <h3 className="lg:text-[32px] lg:mt-[24px] text-[14px] mt-[14px] text-center opacity-[0.75]">
          #MarketKeMovesSeekho
        </h3>

        <a className="lg:flex flex-[0.6] md:max-w-[400px] max-w-[240px] mx-auto" href={partnershipHref}>
          <div className="lg:flex flex-1 lg:mt-10 mt-[16px] justify-center">
            <p className="px-[18px] font-figtree md:py-[12px] py-[8px] bg-[#FF6F37] md:text-[18px] text-[14px] font-semibold bg-btnOrangeGradient shadow-btnOrange text-center rounded-[12px]">
              Explore Partnerships
            </p>
          </div>
        </a>
        <img
          alt="mascot"
          width="275"
          height="418"
          loading="lazy"
          decoding="async"
          className="object-contain lg:w-[275px] w-[133px] h-auto absolute lg:left-[36px] md:-left-[108px] -left-[70px] lg:-bottom-[0px] -bottom-[0px] lg:-translate-x-[100%]"
          src={mascotSrc}
        />
        <img
          alt="hand"
          width="330"
          height="406"
          loading="lazy"
          decoding="async"
          className="object-contain lg:w-[300px] w-[120px] lg:h-auto absolute lg:right-[0px] md:-right-[116px] -right-[74px] bottom-0 lg:translate-x-[100%]"
          src={handSrc}
        />
      </div>
    </section>
  );
}
