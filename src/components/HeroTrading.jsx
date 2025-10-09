import React from "react";

export default function HeroTrading({
  imageSrc = "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
  onCTAClick,
}) {
  return (
    <section className="relative overflow-hidden mt-[calc(var(--header-height)+40px)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[40%] bg-slate-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[1.5rem] w-px bg-slate-200 hidden xl:block"
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:min-h-[440px] gap-10 lg:gap-12">
          <div className="lg:basis-3/5 flex items-center">
            <div className="max-w-2xl">
              <p className="text-primary font-bold tracking-wide text-2xl">
                Learn with Ease
              </p>

              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Not Just to Learn. Start Earning in
                <span className="block">Share Market</span>
              </h1>

              <p className="mt-5 text-[24px] sm:text-[20px] leading-7 text-gray-700/80 font-semibold md:text-lg leading-relaxed">
                EQSIS is the preferred and trusted stock market training institute in Chennai.
                Our 6-week trading course is particularly beneficial for working professionals
                and homemakers to start trading independently.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onCTAClick}
                  className="inline-flex items-center rounded-md bg-[#0B57FF] px-6 py-4 text-white font-semibold tracking-wide shadow-sm hover:bg-[#0a4fe6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B57FF]"
                >
                  GET MORE DETAILS
                </button>
              </div>
            </div>
          </div>

          <div className="lg:basis-2/5 relative flex items-center justify-center">
            <div className="absolute -left-6 top-8 h-[68%] w-[86%] rounded-[28px] bg-slate-100/90 blur-[0.5px] hidden sm:block" />
            <div className="absolute right-8 top-6 hidden sm:block">
              <div className="h-56 w-56 rounded-full border border-slate-300/80" />
              <div className="absolute -right-4 -bottom-4 h-56 w-56 rounded-full border border-slate-200/70" />
            </div>
            <div className="relative w-full max-w-[520px] rounded-xl bg-white/90 ring-1 ring-black/5 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.25)] p-2 sm:p-3">
              <img
                src={imageSrc}
                alt="Stock market training illustration"
                className="block w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] object-contain"
                loading="lazy"
              />
              <div className="mt-1 h-[2px] w-[92%] mx-auto bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
