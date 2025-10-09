// CtaBanner.jsx
import React from "react";

export default function CtaBanner({
  title = "Ready to get started?",
  subtitle = "Contact us to check slot availability",
  href = "#enquiry",
}) {
  return (
    <section className="w-full bg-[#106FBE] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] items-center py-8 sm:py-10">
          {/* Left text */}
          <div>
            <h3 className="font-grotesque font-black leading-tight text-[28px] sm:text-[36px] md:text-[44px]">
              {title}
            </h3>
            <p className="mt-2 text-[14px] sm:text-[16px] opacity-95">
              {subtitle}
            </p>
          </div>

          {/* Right button */}
          <div className="md:justify-self-end">
            <a
              href={href}
              className="inline-flex items-center justify-center
                         bg-white text-[#106FBE] font-extrabold tracking-[0.15em]
                         uppercase text-[12px] sm:text-[13px]
                         px-6 sm:px-8 py-3 border-2 border-[#1f6fff]
                         rounded-[2px] shadow-sm
                         hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
