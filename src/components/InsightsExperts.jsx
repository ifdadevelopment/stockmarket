// InsightsExperts.jsx
import React, { useRef } from "react";
import { image } from "../../data"
const EXPERTS = [
    {
        name: "Priyank Sharma",
        href:
            "https://app.stockgro.club/ui/friend/44afd7c6-ecc3-4768-b2b5-cc271f929181/?is_ria=true",
        avatar: image.ps,
        rotateBg: image.rotateBg,
        tags: "Market Commentry",
        followers: "8k followers",
    },
    {
        name: "Vibhu Jain",
        href:
            "https://app.stockgro.club/ui/friend/8b88e047-6dca-42aa-ab50-a1c0946d85b5/?is_ria=true",
        avatar: image.vj,
        rotateBg: image.rotateBg,
        tags: "Technical, Growth",
        followers: "6k followers",
    },
    {
        name: "Dhwani Patel",
        href:
            "https://app.stockgro.club/ui/friend/346bdae0-be54-4815-99c2-8ca39a1aed79/?is_ria=true",
        avatar: image.dp,
        rotateBg: image.rotateBg,
        tags: "Quantitative, Growth",
        followers: "5k followers",
        highlight: true,
    },
    {
        name: "Abhishek Garg",
        href:
            "https://app.stockgro.club/ui/friend/a254d19b-4030-4db4-b2ce-b9b41e50151e/?is_ria=true",
        avatar: image.ag,
        rotateBg: image.rotateBg,
        tags: "Technical, Swing Trading",
        followers: "1k+ followers",
    },
    {
        name: "Foram Chheda",
        href:
            "https://app.stockgro.club/ui/friend/93537fb4-a257-4bfd-acef-67182008dfa3/?is_ria=true",
        avatar: image.fc,
        rotateBg: image.rotateBg,
        tags: "Index Strategies, Growth",
        followers: "1k followers",
    },
    {
        name: "Vimal K",
        href:
            "https://app.stockgro.club/ui/friend/fda143c1-9751-4b2f-97f5-b8a1df5b7e46/?is_ria=true",
        avatar: image.vk,
        rotateBg: image.rotateBg,
        tags: "Futures & Options, Technical",
        followers: "9k followers",
    },
    {
        name: "Dipen Doshi",
        href:
            "https://app.stockgro.club/ui/friend/aacfb5c6-5599-47bf-a23c-aaec3e117b0f/?is_ria=true",
        avatar: image.dd,
        rotateBg: image.rotateBg,
        tags: "Value Investing, Dividend",
        followers: "17k followers",
    },
    {
        name: "Prabhat Mittal",
        href:
            "https://app.stockgro.club/ui/friend/0656714e-4258-404a-801d-5dd089aaa874/?is_ria=true",
        avatar: image.pm,
        rotateBg: image.rotateBg,
        tags: "Futures & Options, Growth",
        followers: "16k followers",
    },
    //   {
    //     name: "Kavan Patel",
    //     href:
    //       "https://app.stockgro.club/ui/friend/e8719120-b83c-4958-b2ab-1e330ae37f92/?is_ria=true",
    //     avatar: "/_next/static/media/guide7.b51b39f6.webp",
    //     rotateBg: "/_next/static/media/rotateBg.3b1748f8.webp",
    //     tags: "Index Strategies, Technical",
    //     followers: "39k followers",
    //   },
    //   {
    //     name: "Sneha Jain",
    //     href:
    //       "https://app.stockgro.club/ui/friend/7574d732-54de-44ac-b668-10538e0793bb/?is_ria=true",
    //     avatar: "/_next/static/media/guide8.b1d57702.webp",
    //     rotateBg: "/_next/static/media/rotateBg.3b1748f8.webp",
    //     tags: "Market Commentry, Growth",
    //     followers: "9k followers",
    //   },
    //   {
    //     name: "Ashish Kumar",
    //     href:
    //       "https://app.stockgro.club/ui/friend/31a8c2ca-c85b-431d-b1d9-3ef8cb626dff/?is_ria=true",
    //     avatar: "/_next/static/media/guide9.0a92dca1.webp",
    //     rotateBg: "/_next/static/media/rotateBg.3b1748f8.webp",
    //     tags: "Swing Trading, Growth",
    //     followers: "23k followers",
    //   },
    //   {
    //     name: "Chahat Aggrawal",
    //     href:
    //       "https://app.stockgro.club/ui/friend/ae75f9a8-b152-43bb-9ba1-d17cdd74df55/?is_ria=true",
    //     avatar: "/_next/static/media/guide10.92e51526.webp",
    //     rotateBg: "/_next/static/media/rotateBg.3b1748f8.webp",
    //     tags: "Technical Analysis",
    //     followers: "3k followers",
    //   },
    //   {
    //     name: "Akhilesh Jat",
    //     href:
    //       "https://app.stockgro.club/ui/friend/2be1d3df-d397-4289-aea5-ab49141f3d38/?is_ria=true",
    //     avatar: "/_next/static/media/guide11.7ca384e7.webp",
    //     rotateBg: "/_next/static/media/rotateBg.3b1748f8.webp",
    //     tags: "Index Strategies",
    //     followers: "1k+ followers",
    //   },
    //   {
    //     name: "Palak Jain",
    //     href:
    //       "https://app.stockgro.club/ui/friend/14e42a5e-2245-4a24-856c-d4c44dc3a846/?is_ria=true",
    //     avatar: "/_next/static/media/guide12.5fbd9da6.webp",
    //     rotateBg: "/_next/static/media/rotateBg.3b1748f8.webp",
    //     tags: "Swing Trading, Growth",
    //     followers: "5k followers",
    //   },
];

function Arrow({ onClick, side = "left" }) {
    const common =
        "bg-black/40 hover:bg-black/60 text-white hidden group-hover:flex absolute top-[36px] bottom-[160px] px-[16px] items-center justify-center rounded-s-[8px] transition";
    return (
        <button
            onClick={onClick}
            aria-label={side === "left" ? "Scroll left" : "Scroll right"}
            className={`${common} ${side === "left" ? "left-0 rotate-180" : "right-0"}`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" className="h-[32px] w-[32px]">
                <path
                    fill="#fff"
                    d="m12.786 13.273 4.107 4.047-4.107 4.046 1.88 1.866 6-5.912-6-5.912zM2.666 17.32c0 7.252 5.973 13.138 13.333 13.138s13.334-5.886 13.334-13.138S23.359 4.182 15.999 4.182 2.666 10.068 2.666 17.32m24 0c0 5.807-4.773 10.51-10.667 10.51-5.893 0-10.666-4.703-10.666-10.51S10.106 6.81 15.999 6.81s10.667 4.703 10.667 10.51"
                />
            </svg>
        </button>
    );
}

function ExpertCard({ item }) {
    return (
        <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group/card relative flex-shrink-0 flex flex-col items-center duration-300 w-[70%] sm:w-[45%] md:w-[33.333%] lg:w-[20%] px-3"
        >
            <img
                src={item.rotateBg}
                alt=""
                className="lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] absolute -top-[10px] hidden lg:block"
                style={{ animation: "spin 12s linear infinite" }}
            />

            <div className="relative pt-6">
                <img
                    src={item.avatar}
                    alt={item.name}
                    className="grayscale group-hover/card:grayscale-0 transition-all scale-[0.9] object-contain lg:w-[140px] w-[100px] h-auto mx-[8px] lg:mx-[12px]"
                />
            </div>
            <p className="lg:text-[22px] font-bold mt-[24px] opacity-50 font-figtree text-center pb-[138px]">
                {item.name}
            </p>

            <div
                className={`absolute md:top-[172px] top-[174px] w-full min-w-[280px] lg:min-w-[auto] ${item.highlight ? "block" : "hidden group-hover/card:block"
                    }`}
            >
                <div className="bg-white/95 backdrop-blur-[8px] shadow-xl rounded-[12px] p-[24px] font-figtree">
                    <p className="text-[20px] lg:text-[24px] font-semibold">{item.name}</p>
                    <p className="text-[16px] font-medium flex gap-x-[5px] items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="h-[24px] w-[24px]">
                            <path d="M7.2 2.4 12 9.6l4.8-7.2h-2.4L12 7.2 9.6 2.4Z" />
                            <path d="M16.8 14.4a4.8 4.8 0 0 1-4.8 4.8 4.8 4.8 0 0 1-4.8-4.8 4.8 4.8 0 0 1 9.6 0z" />
                        </svg>
                        {item.tags}
                    </p>
                    <p className="text-[16px] font-medium flex gap-x-[5px] items-center mt-2">
                        <svg width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px]">
                            <path d="M13.24 4.547a4.413 4.413 0 1 1 0 8.827 4.413 4.413 0 0 1 0-8.827m0 11.033c4.877 0 8.827 1.975 8.827 4.414V22.2H4.414v-2.206c0-2.439 3.95-4.414 8.827-4.414" />
                        </svg>
                        {item.followers}
                    </p>
                </div>
            </div>
        </a>
    );
}

export default function InsightsExperts() {
    const scrollerRef = useRef(null);

    const scrollByAmount = (dir = 1) => {
        const el = scrollerRef.current;
        if (!el) return;
        const step = Math.round(el.clientWidth * 0.6);
        el.scrollBy({ left: dir * step, behavior: "smooth" });
    };

    return (
        <section className="bg-home-page-gradient font-publicSans  w-full text-white px-[28px] lg:px-0 lg:pt-[60px] lg:pb-[36px] py-[16px]">
            <div className="w-full m-auto max-w-[1150px]">
                <h2 className="lg:text-[52px] text-[30px] lg:leading-[56px] leading-[36px] font-bold">
                    Insights from the Experts
                </h2>
                <div className="flex items-center">
                    <h3 className="flex-1 lg:text-[18px] text-[10px] lg:leading-[28px] leading-[16px] lg:mt-[16px] mt-[12px]">
                        Get all the scoop from StockGro&apos;s SEBI-certified pros. Grasp how to trade stocks, follow their track record, and build your portfolio.
                    </h3>

                    <a
                        className="lg:flex hidden flex-[0.6] justify-end"
                        target="_blank"
                        href="https://app.stockgro.club/ui/social/experts"
                        rel="noreferrer"
                    >
                        <div className="lg:flex flex-1 justify-end">
                            <p className="px-[24px] py-[12px] rounded-[12px] bg-[#FF6F37] text-[18px] font-semibold bg-btnOrangeGradient shadow-btnOrange text-center font-figtree">
                                View All Experts
                            </p>
                        </div>
                    </a>
                </div>
            </div>

            <div className="group relative overflow-hidden lg:pt-[52px] pt-[44px] lg:pb-0 pb-[56px] lg:mx-0 -mx-[28px]">
                <div
                    ref={scrollerRef}
                    className="flex overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
                >
                    <style>
                        {`.group [ref]::-webkit-scrollbar{display:none}`}
                    </style>
                    <div className="flex items-stretch gap-0">
                        {EXPERTS.map((e, idx) => (
                            <ExpertCard key={`${e.name}-${idx}`} item={e} />
                        ))}
                    </div>
                </div>
                <Arrow side="left" onClick={() => scrollByAmount(-1)} />
                <Arrow side="right" onClick={() => scrollByAmount(1)} />
            </div>
        </section>
    );
}
