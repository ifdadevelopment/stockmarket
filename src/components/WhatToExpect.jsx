import React, { useState } from "react";
import {
  EnvelopeIcon,
  ArrowsRightLeftIcon,
  DevicePhoneMobileIcon,
  StarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Feature = ({ icon: Icon, title, children }) => (
  <article className="text-center">
    <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded bg-white ring-1 ring-black/10">
      <Icon className="h-20 w-20 sm:h-9 sm:w-9 text-sky-500" aria-hidden="true" />
    </div>
    <h4 className="text-[24px] font-extrabold tracking-wider text-gray-800 uppercase">
      {title}
    </h4>
    <p className="mx-auto mt-2 max-w-xs text-[18px] font-semibold leading-6 text-gray-600">
      {children}
    </p>
  </article>
);

export default function WhatToExpect() {
  const navigate = useNavigate();

  const handlePlanSelect = (price, plan) => {
    navigate("/checkout", {
      state: { selectedPrice: price, plan },
    });
  };
  const [activeTab, setActiveTab] = useState("Popular");
  const popularPlans = [
    { label: "Rs.13999 / Monthly ", price: 13999, plan: "Monthly" },
    { label: "Rs.29999 / 3 Months", price: 29999, plan: "3 Months" },
    { label: "Rs.55000 / 6 Months", price: 55000, plan: "6 Months" },
    { label: "Rs.80000 / 12 Months", price: 80000, plan: "12 Months" },
  ];
  const diamondPlans = [
    { label: "Rs.19999 / Monthly ", price: 19999, plan: "Monthly" },
    { label: "Rs.51000 / 3 Months", price: 51000, plan: "3 Months" },
    { label: "Rs.85000 / 6 Months", price: 85000, plan: "6 Months" },
    { label: "Rs.121000 / 12 Months", price: 121000, plan: "12 Months" },
  ];

  const displayedPlans = activeTab === "Popular" ? popularPlans : diamondPlans;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900">
          What to expect?
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">

          <Feature icon={EnvelopeIcon} title="Number of Alerts">
            We provide 3 – 4 Intraday calls per day.
          </Feature>

          <Feature icon={ArrowsRightLeftIcon} title="Segment">
            Our calls are generally based on NSE cash markets unless mentioned as futures.
          </Feature>

          <Feature icon={DevicePhoneMobileIcon} title="Delivery">
            Recommendations will be sent through SMS and Telegram during the day.
          </Feature>

          <Feature icon={StarIcon} title="Success Ratio">
            We make fair efforts but cannot guarantee outcomes. Guaranteeing results would
            violate SEBI guidelines and mislead the trader.
          </Feature>
          <div className="text-center">
            <h3 className="text-gray-500 text-[24px] font-extrabold">Plans</h3>
            <div className="flex items-center justify-center mt-3 gap-3">
              <button
                onClick={() => setActiveTab("Popular")}
                className={`px-4 py-2 rounded-md border text-sm font-semibold 
                ${activeTab === "Popular" ? "bg-sky-600 text-white border-sky-600" : "border-sky-500 text-sky-600 hover:bg-sky-50"}`}
              >
                Popular Plans
              </button>

              <button
                onClick={() => setActiveTab("Diamond")}
                className={`px-4 py-2 rounded-md border text-sm font-semibold
                ${activeTab === "Diamond" ? "bg-sky-600 text-white border-sky-600" : "border-sky-500 text-sky-600 hover:bg-sky-50"}`}
              >
                Diamond Plans
              </button>
            </div>
            <div className="mt-4 grid text-[18px] font-semibold gap-3 justify-items-center">
              {displayedPlans.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handlePlanSelect(p.price, p.plan)}
                  className="w-full sm:w-auto rounded-md border border-sky-500 px-5 py-2 text-sky-600 font-semibold shadow-sm hover:bg-sky-50 transition"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <Feature icon={ShoppingBagIcon} title="Past Recommendations">
            It’s all about probability, not certainty. Past performance does not indicate
            future results.
          </Feature>

        </div>
      </div>
    </section>
  );
}
