import React, { useEffect, useMemo, useRef, useState } from "react";
import { image } from "../../data";

const cls = (...xs) => xs.filter(Boolean).join(" ");
const Clamp = ({ lines = 2, className = "", children }) => (
  <span
    className={className}
    style={{
      display: "-webkit-box",
      WebkitLineClamp: lines,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}
  >
    {children}
  </span>
);

export default function InsideMarket({
  coloredLine = image.coloredLine,
  waves = "/_next/static/media/wavesMicro.81d0016d.webp",
  data = defaultData,
}) {
  const tabs = useMemo(
    () => [
      { key: "tradeViews", label: "Trade Views" },
      { key: "highUpside", label: "High Upside" },
      { key: "scans", label: "Scans" },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [pill, setPill] = useState({ w: 0, h: 0, left: 0 });

  useEffect(() => {
    const measure = () => {
      const el = itemRefs.current[active];
      const wrap = containerRef.current;
      if (!el || !wrap) return;
      const wrapRect = wrap.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setPill({
        w: r.width,
        h: r.height,
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

  const trackRef = useRef(null);
  const scrollByCards = (dir = 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const styles = getComputedStyle(track);
    const gap =
      parseFloat(styles.columnGap || styles.gap || "16") || 16;
    const delta = card ? card.getBoundingClientRect().width + gap : 340;
    track.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  const items = data[tabs[active].key] || [];

  return (
    <section className="bg-[#FFECE1] font-publicSans">
      <div className="w-full flex flex-col items-center py-[40px] lg:pt-[60px] px-[20px] lg:px-[54px] overflow-hidden">
        <div className="max-w-[1150px] w-full flex flex-col items-center">
          <h2 className="lg:text-[44px] lg:leading-[54px] leading-[32px] text-[28px] relative lg:text-left text-center font-bold">
            Inside the Market
            <img
              alt=""
              width={585}
              height={31}
              className="h-[8px] w-[130px] lg:h-[10px] lg:w-[195px] absolute lg:right-[8px] right-[2px] lg:-bottom-[4px] bottom-[-4px]"
              src={coloredLine}
            />
          </h2>

          <h3 className="text-base lg:text-2xl max-w-[720px] lg:leading-6 text-center text-greytext font-medium mt-6">
            Crack the code to smart trading with StockGro&apos;s Market Insights and maximise your returns
          </h3>
          <div
            ref={containerRef}
            className="flex relative self-center border-[1.5px] lg:border-[2px] border-black/10 rounded-[16px] mt-[28px] lg:mt-[48px] gap-x-[4px] lg:gap-x-[10px]"
          >
            {tabs.map((t, i) => {
              const activeCls = i === active ? "opacity-100 text-white" : "opacity-[0.7] text-black";
              return (
                <button
                  key={t.key}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onClick={() => setActive(i)}
                  className={cls(
                    "flex-shrink-0 z-[2] cursor-pointer lg:text-[18px] md:text-[14px] text-[13px] leading-[28px] h-[36px] lg:h-[50px]",
                    "w-[112px] max-w-[112px] md:w-[130px] md:max-w-[130px] lg:w-[164px] lg:max-w-[164px]",
                    "flex justify-center items-center lg:gap-x-[6px] gap-x-[4px] font-semibold duration-300",
                    activeCls
                  )}
                >
                  <p className="truncate">{t.label}</p>
                </button>
              );
            })}
            <div
              className="absolute top-[-1.5px] lg:top-[-2px] transition-all duration-300 z-[1] rounded-[16px] bg-btnOrangeGradient shadow-btnOrange"
              style={{
                width: pill.w,
                height: typeof window !== "undefined" && window.innerWidth >= 1024 ? pill.h + 4 : pill.h + 3,
                transform: `translateX(${pill.left}px)`,
              }}
            />
          </div>
          <div className="flex lg:mt-12 mt-6 w-full items-center">
            <h4 className="flex w-full items-center lg:justify-start justify-between min-w-0">
              <span className="lg:text-xl text-[16px] font-semibold">
                Latest {tabs[active].label}
              </span>
              <span className="mx-3 lg:flex hidden">|</span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://app.stockgro.club/ui/social/trade"
                className="lg:text-lg text-[14px] text-exploreHeading font-semibold font-figtree lg:ml-0 ml-auto flex items-center"
              >
                Explore All
                <span className="ml-[6px] -mt-[4px] inline-block" aria-hidden>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M20.364 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l3.95-3.95H4a1 1 0 0 1 0-2h13.243l-3.95-3.95a1 1 0 0 1 1.414-1.414z"
                      fill="#8938F7"
                    />
                  </svg>
                </span>
              </a>
            </h4>
            <div className="ml-auto lg:flex hidden items-center gap-2">
              <button
                onClick={() => scrollByCards(-1)}
                className="rounded-full border border-black/10 px-3 py-1 text-sm"
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                onClick={() => scrollByCards(1)}
                className="rounded-full border border-black/10 px-3 py-1 text-sm"
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <ul
              ref={trackRef}
              className="mt-4 lg:mt-6 flex gap-x-3 lg:gap-x-4 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scroll-smooth pb-2"
            >
              {items.map((card, idx) => (
                <li
                  key={`${card.stock?.ticker || "card"}-${idx}`}
                  data-card
                  className={cls(
                    "snap-start shrink-0 min-w-0 h-full flex",
                    "basis-full lg:basis-1/3"
                  )}
                >
                  <Card waves={waves} {...card} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  profile,
  profileUrl,
  tradeUrl,
  time,
  stock,
  term,
  upsideText = "Potential Upside",
  upsideValue = "X.XX%",
  planCta = { label: "Get Advanced Plan", subscribe: "Subscribe" },
  waves,
}) {
  const CARD_H = "h-[220px] lg:h-[220px]";

  return (
    <div className="flex w-full flex-1">
      <a className="flex flex-1 overflow-hidden" href={tradeUrl} target="_blank" rel="noreferrer">
        <div
          className={cls(
            "border border-[rgb(57,61,79)] shadow-sm rounded-[16px] overflow-hidden max-w-full relative flex flex-col",
            "w-full",
            CARD_H 
          )}
        >
          <div className="h-[36px] flex items-center py-[4px] px-[12px] border-b border-[#D2D2D2]/70 bg-[#F6F6F6]">
            <a href={profileUrl} target="_blank" rel="noreferrer" className="shrink-0">
              <div className="border border-[#8DC63F] rounded-full flex items-center justify-center relative h-[24px] w-[24px] overflow-hidden">
                <img alt={profile?.name || ""} width={24} height={24} className="rounded-full" src={profile?.avatar} />
                <VerifiedTick />
              </div>
            </a>
            <a className="flex-1 overflow-hidden" href={profileUrl} target="_blank" rel="noreferrer">
              <div className="ml-[8px] flex-1 text-[12px] truncate leading-[14px] text-[#747474] text-left">
                {profile?.name}
              </div>
            </a>
            <div className="ml-[8px] text-[10px] leading-[12px] text-[#747474] shrink-0 truncate max-w-[88px] text-right">
              {time}
            </div>
          </div>
          <div className="px-[12px] py-[8px] relative bg-white flex-1 min-w-0">
            <div className="flex items-center min-w-0">
              <a href={tradeUrl} target="_blank" rel="noreferrer" className="shrink-0">
                <img
                  alt={stock?.ticker || ""}
                  width={32}
                  height={32}
                  className="rounded-full flex-shrink-0 border border-[#D9D9D9]"
                  src={stock?.logo}
                />
              </a>
              <div className="flex justify-between overflow-hidden flex-1 min-w-0">
                <a className="overflow-hidden flex-1 min-w-0" href={tradeUrl} target="_blank" rel="noreferrer">
                  <div className="ml-[8px] text-left flex flex-1 flex-col overflow-hidden min-w-0">
                    <p className="text-[14px] leading-[16px] font-semibold truncate">{stock?.name}</p>
                    <p className="text-[12px] leading-[14px] mt-[4px] font-medium text-[#B6B6B6] truncate">
                      {stock?.ticker}
                    </p>
                  </div>
                </a>
                <div className="ml-[8px] text-right shrink-0 max-w-[120px]">
                  <p className="text-[14px] leading-[16px] font-semibold">BUY</p>
                  <Clamp lines={1} className="text-[12px] leading-[14px] mt-[4px] font-medium text-[#B6B6B6]">
                    {term}
                  </Clamp>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-1 mt-[8px] overflow-hidden">
              <div className="flex flex-1 flex-col overflow-hidden text-left min-w-0">
                <p className="text-[14px] leading-[16px] font-semibold truncate">Entry</p>
                <p className="blur-[2px] text-[12px] leading-[14px] mt-[4px] font-medium text-[#B6B6B6]">99999</p>
              </div>
              <div className="ml-[8px] text-right min-w-0">
                <p className="text-[14px] leading-[16px] font-semibold truncate">Target</p>
                <p className="blur-[2px] text-[12px] leading-[14px] mt-[4px] font-medium text-[#B6B6B6]">99999</p>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col items-center pb-[8px] pt-[4px] relative z-[1]">
            <div className="text-[14px] leading-4" style={{ color: "rgb(55, 214, 158)" }}>
              <span className="font-bold text-[16px]">{upsideValue}</span>
              <span className="text-[14px]"> {upsideText}</span>
            </div>
          </div>
          <a className="bg-white z-[3]" href={tradeUrl} target="_blank" rel="noreferrer">
            <div className="bg-white flex items-center z-[5] cursor-pointer h-[44px] justify-center p-[10px] shadow-md border-t border-[#D2D2D2]">
              <img
                alt=""
                width={14}
                height={14}
                className="mr-[6px] object-contain"
                src="https://storage.googleapis.com/stockgro-assets/Adv%202.png"
              />
              <span className="truncate">
                <b>{planCta.label}</b>
              </span>
              <p
                className="ml-auto rounded-[8px] border px-[8px] py-[4px] font-semibold text-[12px] shrink-0"
                style={{ borderColor: "rgb(74, 32, 230)", color: "rgb(74, 32, 230)" }}
              >
                {planCta.subscribe}
              </p>
            </div>
          </a>
        </div>
      </a>
    </div>
  );
}

function VerifiedTick() {
  return (
    <div className="absolute right-[-2px] bottom-[-4px]">
      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
        <path d="M4.264.766a1.02 1.02 0 0 1 1.472 0c.25.26.618.37.969.286a1.026 1.026 0 0 1 1.234.802c.07.354.323.65.663.773.545.195.818.808.61 1.347a1.05 1.05 0 0 0 .143 1.013c.353.461.26 1.125-.209 1.468-.292.214-.45.57-.42.93a1.03 1.03 0 0 1-.96 1.12c-.36.02-.685.232-.851.552a1.02 1.02 0 0 1-1.41.418 1.02 1.02 0 0 0-1.01 0 1.02 1.02 0 0 1-1.41-.418 1.03 1.03 0 0 0-.85-.552 1.03 1.03 0 0 1-.961-1.12 1.05 1.05 0 0 0-.42-.93 1.04 1.04 0 0 1-.21-1.468 1.05 1.05 0 0 0 .144-1.013 1.036 1.036 0 0 1 .61-1.347c.34-.123.592-.419.663-.773a1.026 1.026 0 0 1 1.234-.802c.351.083.72-.026.97-.286" fill="#8DC63F" />
        <path d="M1.531 5.067a3.467 3.467 0 0 1 6.934 0v.072a3.467 3.467 0 0 1-6.934 0z" fill="#000" fillOpacity="0.04" />
        <path d="M2.64 5.067a2.358 2.358 0 1 1 4.716 0v.072a2.358 2.358 0 1 1-4.716 0z" stroke="#fff" strokeOpacity="0.3" strokeWidth="2.218" />
        <path d="m4.43 5.737-.666-.673a.19.19 0 0 0-.27 0 .194.194 0 0 0 0 .273l.801.81a.19.19 0 0 0 .27 0l2.03-2.05a.194.194 0 0 0 0-.273.19.19 0 0 0-.27 0z" fill="#fff" stroke="#FDFDFD" strokeWidth="0.444" />
        <path d="M8.515 5.136a3.514 3.514 0 1 1-7.027 0 3.514 3.514 0 0 1 7.027 0" fill="#fff" fillOpacity="0.5" />
      </svg>
    </div>
  );
}
const defaultData = {
  tradeViews: [
    {
      profile: {
        name: "Harika Enjamuri",
        avatar: image.he,
      },
      profileUrl:
        "https://app.stockgro.club/ui/friend/41938204-9888-44c0-b963-10ff46e3d044?is_ria=true",
      time: "10 Oct • 3:02 PM",
      tradeUrl: "https://app.stockgro.club/ui/subscription/plans/1",
      stock: {
        name: "IIFL Finance Ltd",
        ticker: "IIFL",
        logo:image.iifl,
      },
      term: "Short Term",
      upsideValue: "X.XX%",
    },
     {
      profile: {
        name: "Harika Enjamuri",
        avatar: image.he,
      },
      profileUrl:
        "https://app.stockgro.club/ui/friend/41938204-9888-44c0-b963-10ff46e3d044?is_ria=true",
      time: "10 Oct • 3:02 PM",
      tradeUrl: "https://app.stockgro.club/ui/subscription/plans/1",
      stock: {
        name: "IIFL Finance Ltd",
        ticker: "IIFL",
        logo:image.iifl,
      },
      term: "Short Term",
      upsideValue: "X.XX%",
    },
    {
      profile: {
        name: "saurabh mittal",
        avatar:image.sm,
      },
      profileUrl:
        "https://app.stockgro.club/ui/friend/5ce80531-7168-4659-92a5-3d901c23330f?is_ria=true",
      time: "10 Oct • 3:13 PM",
      tradeUrl: "https://app.stockgro.club/ui/subscription/plans/1",
      stock: {
        name: "New India Assurance Company Ltd",
        ticker: "NIACL",
        logo:image.niacl,
      },
      term: "Short Term",
      upsideValue: "XX%",
    },
  ],
  highUpside: [
    {
      profile: {
        name: "StockYard ( SEBI RA )",
        avatar:image.stock,
      },
      profileUrl:
        "https://app.stockgro.club/ui/friend/ef06b736-5d69-4943-97d8-cedba452317e?is_ria=true",
      time: "10 Oct • 2:37 PM",
      tradeUrl: "https://app.stockgro.club/ui/subscription/plans/1",
      stock: {
        name: "Welspun Living Ltd",
        ticker: "WELSPUNLIV",
        logo:image.wels,
      },
      term: "Medium Term",
      upsideValue: "XX%",
    },
    {
      profile: {
        name: "StockYard ( SEBI RA )",
        avatar:image.stock,
      },
      profileUrl:
        "https://app.stockgro.club/ui/friend/ef06b736-5d69-4943-97d8-cedba452317e?is_ria=true",
      time: "10 Oct • 2:37 PM",
      tradeUrl: "https://app.stockgro.club/ui/subscription/plans/1",
      stock: {
        name: "Welspun Living Ltd",
        ticker: "WELSPUNLIV",
        logo:image.wels,
      },
      term: "Medium Term",
      upsideValue: "XX%",
    },
    {
      profile: {
        name: "Vimal K",
        avatar:
          image.vik,
      },
      profileUrl:
        "https://app.stockgro.club/ui/friend/fda143c1-9751-4b2f-97f5-b8a1df5b7e46?is_ria=true",
      time: "10 Oct • 2:56 PM",
      tradeUrl: "https://app.stockgro.club/ui/subscription/plans/1",
      stock: {
        name: "Lodha Developers Ltd",
        ticker: "LODHA",
        logo:image.lodha,
      },
      term: "Short Term",
    },
  ],
  scans: [
    {
      profile: {
        name: "Jeet B Bhayani (SEBI RA)",
        avatar:image.jbb,
      },
      profileUrl:
        "https://app.stockgro.club/ui/friend/8cb8d8c3-acd8-4fe2-b5d0-3d2e56b4c3aa?is_ria=true",
      time: "10 Oct • 2:27 PM",
      tradeUrl: "https://app.stockgro.club/ui/subscription/plans/1",
      stock: {
        name: "Brigade Enterprises Ltd",
        ticker: "BRIGADE",
        logo:image.brigade,
      },
      term: "Long Term",
    },
    {
      profile: {
        name: "Jeet B Bhayani (SEBI RA)",
        avatar:image.jbb,
      },
      profileUrl:
        "https://app.stockgro.club/ui/friend/8cb8d8c3-acd8-4fe2-b5d0-3d2e56b4c3aa?is_ria=true",
      time: "10 Oct • 2:27 PM",
      tradeUrl: "https://app.stockgro.club/ui/subscription/plans/1",
      stock: {
        name: "Brigade Enterprises Ltd",
        ticker: "BRIGADE",
        logo:image.brigade,
      },
      term: "Long Term",
    },
    {
      profile: {
        name: "Arpit Goel FINKHOZ",
        avatar:image.aig,
      },
      profileUrl:
        "https://app.stockgro.club/ui/friend/e2b0856e-5f62-424d-a218-03b38e14fe31?is_ria=true",
      time: "10 Oct • 1:55 PM",
      tradeUrl: "https://app.stockgro.club/ui/subscription/plans/1",
      stock: {
        name: "Bajaj Auto",
        ticker: "BAJAJ-AUTO",
        logo:image.bajaj,
      },
      term: "Long Term",
    },
  ],
};
