import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlanButton = ({ label, color = "red", onClick }) => {
  const colorClasses =
    color === "red"
      ? "bg-[#ff5555] hover:bg-[#ff4747] shadow-[0_12px_32px_-10px_rgba(255,85,85,0.45)]"
      : "bg-[#16A34A] hover:bg-[#0a5fe6] shadow-[0_12px_32px_-10px_rgba(11,105,255,0.45)]";

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center text-center whitespace-normal break-words rounded-full px-7 sm:px-10 py-4 text-[12px] sm:text-[16px] font-extrabold tracking-wider text-white ring-1 ring-white/10 transition-colors ${colorClasses} w-full max-w-[220px] sm:max-w-[250px] leading-snug`}
      style={{ lineHeight: "1.3" }}
    >
      {label}
    </button>
  );
};

export default function SubscribePlans() {
  const navigate = useNavigate();

  const handleSelectPlan = (price, planName) => {
    navigate("/checkout", {
      state: { selectedPrice: price, plan: planName },
    });
  };

  const [activeTab, setActiveTab] = useState("Popular");

  const popularPlans = [
    { label: "RS.13999 / \nMONTHLY", price: 13999, plan: "MONTHLY", color: "green" },
    { label: "RS.29999 / \n3 MONTHS", price: 29999, plan: "3 Months" },
    { label: "RS.55000 / \n6 MONTHS", price: 55000, plan: "6 Months", save: "25%" },
    { label: "RS.80000 / \n12 MONTHS", price: 80000, plan: "12 Months", save: "50%" },
  ];
  const diamondPlans = [
    { label: "RS.19999 / \n MONTHLY", price: 19999, plan: "MONTHLY Diamond", color: "green" },
    { label: "RS.51000 / \n3 MONTHS", price: 51000, plan: "3 Months Diamond" },
    { label: "RS.85000 / \n6 MONTHS", price: 85000, plan: "6 Months Diamond", save: "25%" },
    { label: "RS.121000 / \n12 MONTHS", price: 121000, plan: "12 Months Diamond", save: "50%" },
  ];

  const displayedPlans = activeTab === "Popular" ? popularPlans : diamondPlans;

  return (
    <section className="px-4 py-10 sm:py-12 font-publicSans">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-[#171e27] text-white ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 text-center">

          <h2 className="text-[28px] sm:text-[34px] md:text-[44px] font-serif font-black">
            Subscribe Now!!!
          </h2>
          <p className="mt-3 text-[20px] sm:text-[22px] font-semibold text-white/80 leading-relaxed max-w-3xl mx-auto">
            Choose from our flexible plans and start your journey today.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("Popular")}
              className={`px-5 py-2 rounded-full text-sm font-bold transition 
              ${activeTab === "Popular" ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              Popular Plans
            </button>

            <button
              onClick={() => setActiveTab("Diamond")}
              className={`px-5 py-2 rounded-full text-sm font-bold transition 
              ${activeTab === "Diamond" ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              Diamond Plans
            </button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {displayedPlans.map((p, idx) => (
              <div key={idx} className="text-center uppercase font-semibold text-lg">
                <PlanButton
                  label={p.label}
                  color={p.color ?? "red"}
                  onClick={() => handleSelectPlan(p.price, p.plan)}
                />
                {p.save && (
                  <p className="mt-2 text-lime-300 font-extrabold">Save {p.save}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
