import React from "react";

const PlanButton = ({ label, color = "red", onClick }) => {
    const colorClasses =
        color === "red"
            ? "bg-[#ff5555] hover:bg-[#ff4747] shadow-[0_12px_32px_-10px_rgba(255,85,85,0.45)] "
            : "bg-[#0B69FF] hover:bg-[#0a5fe6] shadow-[0_12px_32px_-10px_rgba(11,105,255,0.45)]";

    return (
        <button
            onClick={onClick}
            className={`inline-flex items-center justify-center rounded-full px-7 sm:px-10 py-4
                  text-[12px] sm:text-[13px] font-extrabold tracking-wider text-white
                  ring-1 ring-white/10 transition-colors ${colorClasses}`}
        >
            {label}
        </button>
    );
};

export default function SubscribePlans() {
    return (
        <section className="px-4 py-10 sm:py-12">
            <div className="mx-auto max-w-6xl">
                <div className="rounded-2xl bg-[#171e27] text-white ring-1 ring-white/10
                        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]
                        px-5 sm:px-8 lg:px-12 py-8 sm:py-10">
                    <h2 className="text-[28px] sm:text-[34px] md:text-[44px] font-serif font-black">
                        Subscribe Now!!!
                    </h2>
                    <p className="mt-3 text-[24px] sm:text-[24px] font-semibold text-white/80">
                        We offer 3 months, 6 months and 12 months subscription plans to avail of our intraday at an affordable price.
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
                        <div className="text-center uppercase  font-semibold ">
                            <PlanButton label="RS.6000 / 3 MONTHS" />
                        </div>
                        <div className="text-center uppercase   font-semibold ">
                            <PlanButton label="RS.9000 / 6 MONTHS" />
                            <p className="mt-2 text-lime-300 font-extrabold">Save 25%</p>
                        </div>
                        <div className="text-center uppercase   font-semibold ">
                            <PlanButton label="RS.12000 / 12 MONTHS" />
                            <p className="mt-2 text-lime-300 font-extrabold">Save 50%</p>
                        </div>
                        <div className="text-center uppercase   font-semibold text-lg">
                            <PlanButton label="RS.499 / ONE WEEK PAID TRIAL" color="blue" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
