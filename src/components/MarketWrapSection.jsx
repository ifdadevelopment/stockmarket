// MarketWrapSection.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

const MARKET_WRAP_ITEMS = [
  { title: "Stock Market India- Nifty updates for May 8",  thumb: "https://storage.googleapis.com/img_compresssion_bkt/1_lDjTPPmoazQYclnBbYZonCJ7vp-twRt.webp",  tags: "#shorts #youtubeshorts #share #stocks" },
  { title: "Stock Market India- Nifty updates for May 6",  thumb: "https://storage.googleapis.com/img_compresssion_bkt/1C_glkh-4dbWtRu8fRbgTuLuZ0hFfXcJw.webp",  tags: "#shorts #youtubeshorts #share #stocks" },
  { title: "Stock Market India- Nifty updates for May 5",  thumb: "https://storage.googleapis.com/img_compresssion_bkt/1DIAFK2ABtVsMLZ5MfJiXrHnHR0Dnaohb.webp",  tags: "#shorts #youtubeshorts #share #stocks" },
  { title: "Stock Market India- Nifty updates for May 2",  thumb: "https://storage.googleapis.com/img_compresssion_bkt/1y3iCL9njpXWlyWA8Cy4wHCMEQWtzLXb9.webp",  tags: "#shorts #youtubeshorts #share #stocks" },
  { title: "Stock Market India- Nifty updates for April 30",thumb: "https://storage.googleapis.com/img_compresssion_bkt/1vBE-wKRSf0575WCCevPcS2i_7zOaJE2y.webp",  tags: "#shorts #youtubeshorts #share #stocks" },
  { title: "Stock Market India- Nifty updates for April 7",  thumb: "https://storage.googleapis.com/img_compresssion_bkt/1yV_M8TOcYzv5vyV4uGAPstPnsydlkp0m.webp",  tags: "#shorts #youtubeshorts #share #stocks" },
];

export default function MarketWrapSection() {
  const GAP = 16; // px between cards
  const FIXED_CARD_H = 360;

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1); // 1 on small, 3 on lg
  const [cardW, setCardW] = useState(320);

  const viewportRef = useRef(null);

  // Decide visible cards by breakpoint
  const computeVisible = () => (window.innerWidth >= 1024 ? 3 : 1);

  // Recompute layout on resize
  useEffect(() => {
    const update = () => {
      const v = computeVisible();
      setVisible(v);

      const vw = viewportRef.current?.clientWidth || 320;
      const w = Math.floor((vw - GAP * (v - 1)) / v);
      setCardW(Math.max(240, w)); // keep a sensible min width
    };

    update();
    const ro = new ResizeObserver(update);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  // Bound index when visible changes
  const maxIndex = useMemo(
    () => Math.max(0, MARKET_WRAP_ITEMS.length - visible),
    [visible]
  );

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const step = cardW + GAP;
  const translateX = -(index * step);

  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const prev = () => setIndex((i) => Math.max(0, i - 1));

  // Basic touch swipe for mobile
  const touchStartX = useRef(null);
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    const THRESH = 40;
    if (dx > THRESH) prev();
    else if (dx < -THRESH) next();
  };

  return (
    <section className="bg-[#ffece1] font-publicSans">
      <div className="w-full max-w-[1150px] m-auto lg:px-0 lg:py-[60px] px-5 py-[34px]">
        <div className="flex justify-center">
          <h2 className="lg:text-[44px] lg:leading-[54px] text-[24px] leading-[28px] relative text-center font-bold">
            What&apos;s brewing in the market today?
            <img
              alt=""
              loading="lazy"
              className="h-[8px] w-[74px] lg:h-[10px] lg:w-[280px] object-contain absolute lg:right-2 right-[136px] lg:-bottom-1 -bottom-[2px]"
              src="/_next/static/media/coloredLine.3506ae69.webp"
            />
          </h2>
        </div>

        <div className="flex items-center justify-center mt-3">
          <h3 className="text-[#535B62] lg:text-[18px] text-[14px] lg:leading-[22px] leading-[18px] text-center">
            Catch our &quot;Market Wrap&quot; series for a quick, entertaining
            roundup of the day&apos;s market insights.
          </h3>
        </div>

        <div className="relative mt-6">
          {/* Left button (desktop) */}
          <button
            aria-label="Previous"
            onClick={prev}
            disabled={index === 0}
            className="hidden lg:flex absolute -left-20 top-1/2 -translate-y-1/2 rounded-xl bg-white/80 p-2 shadow
                       hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6F37]
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 32 32" className="rotate-180">
              <circle cx="16" cy="16" r="15" stroke="#FF6F37" />
              <path fill="#FF6F37" d="m12.8 13.3 4.1 4.05-4.1 4.05 1.88 1.87 6-5.92-6-5.92z" />
            </svg>
          </button>

          {/* Viewport */}
          <div
            ref={viewportRef}
            className="overflow-hidden w-full"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Track */}
            <ul
              className="flex"
              style={{
                gap: GAP,
                width:
                  MARKET_WRAP_ITEMS.length * cardW +
                  (MARKET_WRAP_ITEMS.length - 1) * GAP,
                transform: `translate3d(${translateX}px, 0, 0)`,
                transition: "transform 450ms cubic-bezier(0.22, 0.61, 0.36, 1)",
                willChange: "transform",
              }}
            >
              {MARKET_WRAP_ITEMS.map((v, i) => (
                <li
                  key={i}
                  style={{ width: cardW, height: FIXED_CARD_H, flex: "0 0 auto" }}
                >
                  <article className="rounded-xl overflow-hidden bg-black/5 w-full h-full">
                    <div
                      className="relative w-full h-full flex items-end"
                      style={{
                        backgroundImage: `url(${v.thumb})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="relative text-white p-4 flex flex-col gap-2">
                        <h4 className="font-semibold text-[16px] leading-5 line-clamp-2">
                          {v.title}
                        </h4>
                        <p className="text-white/80 text-sm line-clamp-1">{v.tags}</p>
                        <div className="mt-1">
                          <span className="inline-flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                              <rect width="26" height="26" x="0.875" y="0.514648" fill="#14BD00" rx="4" />
                              <path d="M17.7986 13.5146L11.443 18.0179V9.01124L17.7986 13.5146Z" fill="white" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          {/* Right button (desktop) */}
          <button
            aria-label="Next"
            onClick={next}
            disabled={index === maxIndex}
            className="hidden lg:flex absolute -right-20 top-1/2 -translate-y-1/2 rounded-xl bg-white/80 p-2 shadow
                       hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6F37]
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="15" stroke="#FF6F37" />
              <path fill="#FF6F37" d="m12.8 13.3 4.1 4.05-4.1 4.05 1.88 1.87 6-5.92-6-5.92z" />
            </svg>
          </button>

          {/* Mobile controls */}
          <div className="lg:hidden mt-4 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="rounded-full border border-[#FF6F37]/50 px-4 py-2 text-[#FF6F37] disabled:opacity-40"
            >
              Prev
            </button>
            <div className="flex gap-1">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-6 rounded-full transition-all ${
                    i === index ? "bg-[#FF6F37]" : "bg-[#FF6F37]/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="rounded-full border border-[#FF6F37]/50 px-4 py-2 text-[#FF6F37] disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
