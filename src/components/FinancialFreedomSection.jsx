import React, { useEffect, useMemo, useRef, useState } from "react";
import {image} from "../../data"
export default function FinancialFreedomSection({
  coloredLine = image.coloredLine,
  ff1Card1 = image.ff1Card1,
  ff1Card2 = image.ff1Card2,
  ff1Card3 = image.ff1Card3,
  ff2Card = image.ff2Card,
  flywheel1 = image.flywheel1,
  flywheel2 = image.flywheel2,
  flywheel3 = image.flywheel3,
  ff3Card1 = image.ff3Card1,
  ff3Card2 = image.ff3Card2,
}) {
  const tabs = useMemo(
    () => [
      { key: "stocks", label: "Stocks", iconFill: "#fff", activeText: "white", inactiveText: "black" },
      { key: "portfolio", label: "Portfolio", iconFill: "#000", activeText: "white", inactiveText: "black" },
      { key: "experts", label: "Experts", iconFill: "#000", activeText: "white", inactiveText: "black" },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const barRef = useRef(null);
  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0, height: 0 });

  useEffect(() => {
    const measure = () => {
      const el = itemRefs.current[active];
      const wrap = containerRef.current;
      if (!el || !wrap) return;
      const wrapRect = wrap.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setPillStyle({
        width: r.width,
        height: r.height,
        left: r.left - wrapRect.left,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);
  const leftContent = [
    {
      title: "Actionable Stock Insights",
      subtitle: "Gain a comprehensive overview of stocks before investing",
      bullets: [
        "Compare returns, review stock scores, view analyst rankings",
        "Evaluate performance against competitors and industry benchmarks",
        "Get the latest news, events, and trends impacting the stock",
      ],
      ctaText: "Discover Insights",
      ctaHref: "https://app.stockgro.club/ui/market",
    },
    {
      title: "Verified Portfolios",
      subtitle: "Study your friends' & experts' portfolios to gain insights",
      bullets: [
        "Access verified portfolios of experts",
        "Look at an expert's record before following along",
        "Evaluate peers' strategies & internalising them",
      ],
      ctaText: "View Portfolios",
      ctaHref: "https://app.stockgro.club/ui/portfolio",
    },
    {
      title: "Trusted Experts",
      subtitle:
        "Understand and apply trading strategies of top investment managers",
      bullets: [
        "Find an advisor with your preferred investing style",
        "Build and test investment strategies along with expert advice",
        "Gain their investing insights in real-time",
      ],
      ctaText: "Discover the Experts",
      ctaHref: "https://app.stockgro.club/ui/social/experts",
    },
  ];

  return (
    <section className="bg-[#ffece1] w-full pt-[40px] font-publicSans lg:pt-[60px] lg:px-[54px] px-[28px] text-white">
      <div className="max-w-[1150px] mx-auto flex flex-col">
        <h2 className="text-[28px] lg:text-[44px] font-bold lg:leading-[54px] flex flex-col self-center leading-[33px] text-center text-[#000000]">
          Your Financial Freedom
          <span className="relative flex self-center">
            Starts Here
            <img
              alt=""
              width={585}
              height={31}
              className="h-[8px] w-[64px] lg:h-[10px] lg:w-[95px] absolute lg:right-[4px] right-[2px] lg:-bottom-[4px] bottom-[-4px]"
              src={coloredLine}
            />
          </span>
        </h2>
        <div className="min-h-[36px] lg:min-h-[50px] flex w-full justify-center">
          <div
            ref={containerRef}
            className="flex relative self-center border-[1.5px] lg:border-[2px]  border-[#391A643D] border-opacity-[0.25] rounded-[16px] mt-[28px] lg:mt-[48px] gap-x-[4px] lg:gap-x-[10px] "
          >
            {tabs.map((t, i) => {
              const activeClass =
                i === active
                  ? "opacity-100 text-white"
                  : "opacity-50 text-black";
              return (
                <button
                  key={t.key}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 z-[2] cursor-pointer lg:text-[18px] md:text-[14px] text-[13px] leading-[28px] h-[36px] lg:h-[50px]
                    w-[112px] max-w-[112px] md:w-[130px] md:max-w-[130px] lg:w-[164px] lg:max-w-[164px]
                    flex justify-center items-center lg:gap-x-[6px] gap-x-[4px] font-semibold duration-300 ${activeClass}`}
                >
                  {i === 0 && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="lg:h-[24px] lg:w-[24px] h-[22px] w-[20px]"
                    >
                      <path
                        d="M21.375 19.813h-1.687V8.563A.563.563 0 0 0 19.125 8h-2.25a.56.56 0 0 0-.562.563v11.25h-1.125V5.75a.563.563 0 0 0-.563-.562h-2.25a.56.56 0 0 0-.562.562v14.063h-1.126v-8.438a.56.56 0 0 0-.562-.562h-2.25a.563.563 0 0 0-.562.562v8.438H5.625a.563.563 0 0 0 0 1.125h15.75a.562.562 0 1 0 0-1.125"
                        fill={i === active ? "#fff" : "#000"}
                      />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="lg:h-[24px] lg:w-[24px] h-[22px] w-[20px]"
                    >
                      <path
                        fill={i === active ? "#fff" : "#000"}
                        d="M12.5 22.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10m1.5-14c.328.436.563.946.675 1.5H16.5v1.5h-1.825a3.75 3.75 0 0 1-3.675 3h-.19l3.72 3.72-1.06 1.06-4.97-4.97V13H11a2.25 2.25 0 0 0 2.122-1.5H8.5V10h4.622A2.25 2.25 0 0 0 11 8.5H8.5V7h8v1.5z"
                      />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="lg:h-[24px] lg:w-[24px] h-[22px] w-[20px]"
                    >
                      <path
                        fill={i === active ? "#fff" : "#000"}
                        d="M15 4.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.9a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2m0 7.1c2.67 0 8 1.33 8 4v3H7v-3c0-2.67 5.33-4 8-4m0 1.9c-3 0-6.1 1.46-6.1 2.1v1.1h12.2v-1.1c0-.64-3.13-2.1-6.1-2.1M5 13.78l-2.5 1.49.68-2.81L1 10.58l2.87-.25L5 7.69l1.11 2.64 2.89.25-2.2 1.88.65 2.81z"
                      />
                    </svg>
                  )}
                  <p>{t.label}</p>
                </button>
              );
            })}
            <div
              ref={barRef}
              className="absolute top-[-1.5px] lg:top-[-2px] transition-all duration-300 cursor-pointer z-[1] rounded-[16px] bg-btnOrangeGradient shadow-btnOrange"
              style={{
                width: pillStyle.width,
                height: pillStyle.height + (window?.innerWidth >= 1024 ? 4 : 3),
                transform: `translateX(${pillStyle.left}px)`,
              }}
            />
          </div>
        </div>
        <div className="flex">
          <div className="lg:mt-[80px] mt-[34px] max-h-[380px] lg:h-[420px] lg:min-h-[420px] min-h-[350px] lg:max-h-[450px] h-full overflow-hidden flex-1 lg:pr-0 pr-[8px]">
            <div
              className="duration-300 flex flex-col gap-y-[16px] lg:gap-y-[24px] h-full"
              style={{ transform: "translateY(0px)" }}
            >
              {leftContent.map((pane, idx) => (
                <div
                  key={pane.title}
                  className={`h-full lg:min-h-[420px] min-h-[380px] text-[#000] ${
                    idx === active ? "block" : "hidden"
                  }`}
                >
                  <h2 className="text-[24px] md:text-[30px] lg:text-[38px] font-bold leading-[32px] md:leading-[34px] lg:leading-[40px]">
                    {pane.title}
                  </h2>
                  <h3 className="mt-[26px] lg:mt-[32px] text-[12px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[28px] font-publicSans">
                    {pane.subtitle}
                  </h3>
                  <ul className="lg:mt-[32px] mt-[26px]">
                    {pane.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex items-center lg:mt-[32px] mt-[18px] text-[10px] md:text-[14px] md:leading-[16px] leading-[14px] lg:text:[16px] lg:leading-[22px]"
                      >
                        <div className="h-[9px] flex-shrink-0 w-[9px] lg:h-[13px] lg:w-[13px] mr-[9px] lg:mr-[13px] rounded-full bg-[#8938F7]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="lg:px-[24px] px-[18px] lg:mt-[64px] mt-[28px] lg:py-[12px] py-[6px] bg-[#FF6F37] text-[12px] lg:text-[18px] font-semibold leading-[22px] text-white font-figtree w-fit bg-btnOrangeGradient shadow-btnOrange etxt-center rounded-[16px]">
                    <a target="_blank" rel="noreferrer" href={pane.ctaHref}>
                      {pane.ctaText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:flex-[0.8] flex-[0.75] lg:mr-0 -mr-[28px] overflow-hidden">
            <div
              className="duration-300 h-[200%] w-[200%] grid grid-rows-2 grid-cols-2 gap-0 lg:overflow-hidden overflow-visible"
              style={{ transform: "rotate(0deg)" }}
            >
              <div className={`h-full flex relative overflow-hidden ${active === 0 ? "block" : "hidden"}`}>
                <div
                  id="1"
                  className="absolute lg:right-[24px] lg:bottom-0 right-[-36px] bottom-[-20px] lg:h-[450px] lg:w-[400px] h-[225px] w-[200px] flex flex-col items-end ml-auto mt-auto rotate-[-10deg]"
                  style={{ transformOrigin: "50% 100%" }}
                >
                  <img src={ff1Card3} alt="" className="lg:w-[160px] w-[80px] h-auto absolute lg:right-[-100px] right-[-16px] lg:top-[24px] top-[-116px]" />
                  <img src={flywheel1} alt="" className="lg:w-[340px] md:w-[200px] w-[140px] h-auto absolute lg:top-0 md:bottom-[-36px] bottom-0 lg:right-0 md:right-[36px] right-[-8px]" />
                  <img src={ff1Card1} alt="" className="lg:w-[260px] md:w-[200px] w-[140px] h-auto absolute lg:left-[-36px] md:left-[-120px] left-[40px] lg:top-[96px] md:top-[-80px] top-0" />
                  <img src={ff1Card2} alt="" className="lg:w-[220px] md:w-[140px] w-[110px] h-auto absolute lg:bottom-[-96px] lg:-right-[48px] bottom-0 right-[-24px]" />
                </div>
              </div>
              <div className={`w-full h-full flex relative overflow-hidden ${active === 1 ? "block" : "hidden"}`}>
                <div
                  id="2"
                  className="absolute left-0 bottom-0 lg:h-[400px] lg:w-[450px] h-[200px] w-[225px] flex flex-col items-end mr-auto mt-auto rotate-[-10deg]"
                  style={{ transformOrigin: "0% 50%" }}
                >
                  <img
                    alt=""
                    className="lg:h-[340px] md:h-[200px] h-[140px] w-auto absolute lg:bottom-0 md:bottom-0 bottom-[-42px] lg:right-[4px] md:-right-[120px] -right-[36px] max-w-[800px]"
                    src={flywheel2}
                  />
                  <img
                    alt=""
                    className="lg:w-[410px] md:w-[320px] w-[150px] h-auto rotate-[90deg] absolute lg:left-[-22px] md:left-[84px] left-auto lg:right-auto md:right-[-4px] right-[-10px] lg:-bottom-[calc(50%+18px)] -bottom-[calc(50%+12px)]  -translate-y-[100%]"
                    src={ff2Card}
                  />
                </div>
              </div>
              <div className="h-full flex relative" />
              <div className={`h-full flex relative overflow-hidden ${active === 2 ? "block" : "hidden"}`}>
                <div
                  id="3"
                  className="absolute left-[24px] top-0 lg:h-[450px] lg:w-[400px] w-[200px] h-[225px] flex flex-col items-start mr-auto mb-auto rotate-[-10deg]"
                  style={{ transformOrigin: "50% 0%" }}
                >
                  <img
                    alt=""
                    className="rotate-[180deg] md:w-[120px] lg:w-[180px] w-[80px] h-auto absolute lg:-right-[28px] right-[84px] md:right-[-70px] lg:top-[40px] md:top-[24px] top-[6px]"
                    src={ff3Card1}
                  />
                  <img
                    alt=""
                    className="lg:w-[340px] md:w-[200px] w-[140px] h-auto absolute lg:bottom-0 lg:bottom-[-4px] md:bottom-[-110px] lg:top-auto md:top-auto top-[-32px] lg:-right-[12px] md:right-[0px] right-0 left-[-64px] md:left-0 lg:left-0"
                    src={flywheel3}
                  />
                  <img
                    alt=""
                    className="rotate-[180deg] md:w-[200px] lg:w-[240px] w-[100px] h-auto absolute lg:-left-[84px] lg:bottom-[24px] -left-[66px] -bottom-[60px] md:-bottom-[80px]"
                    src={ff3Card2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
}
