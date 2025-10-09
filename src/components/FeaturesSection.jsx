import React from "react";
import { FiPenTool, FiBarChart2, FiGlobe } from "react-icons/fi";

const PRIMARY = "#1155FF";

const FeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-center ">
        <h2 className="font-grotesque font-black mt-2 text-[30px] sm:text-[40px] md:text-[48px] leading-tight text-black text-center">
          <span className="relative inline-block px-1">
            <span className="relative z-10">Stop Doubting Yourself,</span>
            <span className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-slate-500"></span>
          </span>{" "}
          Trade with Confidence
        </h2>

        <p className="mt-4 text-[26px] sm:text-[24px] font-semibold text-slate-600 leading-7">
          With our stock market course, you will gain the confidence and knowledge to
          succeed. We will teach you stock market basics, technical analysis, intraday
          trading strategies, and futures and options.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          className="group rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                     border-t-4"
          style={{ borderTopColor: PRIMARY }}
        >
          <div className="p-8 text-center">
            <div className="mx-auto mb-5 h-15 w-15 text-[#2b4a7d]">
              <FiPenTool className="h-10 w-10 mx-auto" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Beginner-Friendly</h3>
            <p className="mt-3 text-slate-600 text-xl leading-7">
              Our trading course is <span className="font-semibold">designed for beginners</span>.
              We use simple and relatable examples.
            </p>
          </div>
        </article>
        <article
          className="group rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                     border-t-4"
          style={{ borderTopColor: PRIMARY }}
        >
          <div className="p-8 text-center">
            <div className="mx-auto mb-5 h-15 w-15 text-[#2b4a7d]">
              <FiBarChart2 className="h-10 w-10 mx-auto" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Learn by Doing</h3>
            <p className="mt-3 text-slate-600 text-xl leading-7">
              Experience hands-on training with{" "}
              <span className="font-semibold">practical classes</span> for successful stock
              trading.
            </p>
          </div>
        </article>
        <article
          className="group rounded-xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                     border-t-4"
          style={{ borderTopColor: PRIMARY }}
        >
          <div className="p-8 text-center">
            <div className="mx-auto mb-5 h-15 w-15 text-[#2b4a7d]">
              <FiGlobe className="h-10 w-10 mx-auto" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Post-Training Support</h3>
            <p className="mt-3 text-slate-600 text-xl leading-7">
              Get ongoing support and <span className="font-semibold">interact with your trainer</span>{" "}
              until you’re confident in trading.
            </p>
          </div>
        </article>
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md
                     px-8 py-3 text-white font-semibold shadow-md
                     transition-all duration-200"
          style={{ backgroundColor: PRIMARY }}
        >
          TALK TO US
        </a>
      </div>
    </section>
  );
};

export default FeaturesSection;
