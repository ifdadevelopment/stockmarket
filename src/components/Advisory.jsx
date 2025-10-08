import React from "react";
import { LuSprout, LuLightbulb } from "react-icons/lu";
import { PiCurrencyInrBold } from "react-icons/pi";

const Card = ({ icon, title, desc, href = "#" }) => (
  <a
    href={href}
    className="group block rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] ring-1 ring-black/5
               transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.12)]"
  >
    <div className="p-8">
      <div className="text-emerald-700 text-3xl">{icon}</div>
      <h3 className="mt-4 text-xl font-extrabold text-gray-900">{title}</h3>
      <p className="mt-2 text-[15px] leading-7 text-gray-600">{desc}</p>
      <span className="mt-5 inline-block text-sm font-semibold tracking-wide text-[#1676D2]
                       underline-offset-4 group-hover:underline">
        LEARN MORE
      </span>
    </div>
  </a>
);

export default function AdvisorySection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-neutral-300" />
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-gradient-to-b from-white via-white to-gray-100" />
        <div className="pointer-events-none absolute inset-y-0 right-[38%] w-[38%] 
                        bg-[radial-gradient(closest-side,rgba(0,0,0,0.06),transparent_70%)] blur-[6px] opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-[1.05fr_1.2fr]">
          <div className="max-w-xl md:pr-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Advisory</h2>
            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              Expert research backed actionable recommendations for traders and investors.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="relative">
              <Card
                icon={<LuSprout />}
                title="Invest Long-Term with SIP"
                desc="Get started on your journey to long-term wealth creation with smart SIP investing."
              />
              <div className="absolute left-3 right-3 -bottom-3 h-2 rounded bg-black/10 blur-md" />
            </div>

            <div className="relative">
              <Card
                icon={<PiCurrencyInrBold />}
                title="Intraday Recommendations"
                desc="Get well-informed intraday trading tips to make your trading more profitable."
              />
              <div className="absolute left-3 right-3 -bottom-3 h-2 rounded bg-black/10 blur-md" />
            </div>
            <div className="sm:col-start-2 sm:row-start-2 sm:mt-2">
              <Card
                icon={<LuLightbulb />}
                title="Weekly Option Strategy"
                desc="Get risk-adjusted returns using optimized and back-tested option strategies for consistent outcomes."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
