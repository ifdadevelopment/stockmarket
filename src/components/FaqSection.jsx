// FaqSection.jsx
import React from "react";

const faqs = [
  // Column 1
  [
    {
      q: "What topics are covered in your stock market training courses?",
      a: "Our stock market training courses cover fundamentals, technical analysis, intraday strategies, futures, options, and risk management. Available as stock market classes in Chennai or online.",
    },
    {
      q: "What languages are available for EQSIS share market classes?",
      a: "EQSIS offers classes in English and Tamil, convenient for learners across Chennai and Tamil Nadu.",
    },
    {
      q: "Do you provide share market training in Chennai?",
      a: "Absolutely! We offer classroom and online sessions, suitable for beginners and experienced traders.",
    },
    {
      q: "Are there stock market training batches during weekdays and weekends?",
      a: "Yes. Flexible schedules with weekday and weekend options to suit working professionals and students.",
    },
  ],
  // Column 2
  [
    {
      q: "How can I join the Eqsis trading classes in Chennai?",
      a: "Register on our website. We provide flexible timings with both online and classroom sessions.",
    },
    {
      q: "Are your share market courses available online?",
      a: "Yes. Learn at your own pace from anywhere with an internet connection.",
    },
    {
      q: "What study modes are available at EQSIS for share market courses?",
      a: "In-person classroom sessions and remote online batches (weekday/weekend) to accommodate preferences.",
    },
    {
      q: "What is the batch size for EQSIS share market classes?",
      a: "We keep batches compact to enable interaction and hands-on learning.",
    },
  ],
  // Column 3
  [
    {
      q: "How practical are your stock market classes?",
      a: "We emphasize practical learning with live market sessions and simulations to apply theory effectively.",
    },
    {
      q: "What is the goal of EQSIS’s stock market training?",
      a: "To equip students with confidence and practical skill to trade successfully.",
    },
    {
      q: "How does EQSIS support local residents within Chennai?",
      a: "Flexible classroom schedules; plus convenient online sessions for remote learners.",
    },
    {
      q: "What do students say about EQSIS share market classes?",
      a: "Trusted by thousands with strong reviews for clarity, structure, and results.",
    },
  ],
];

function QA({ q, a }) {
  return (
    <div>
      <h4 className="text-[25px] sm:text-[20px] font-extrabold text-gray-900">
        {q}
      </h4>
      <p className="mt-2 text-[16px] font-semibold sm:text-[16px] leading-[1.9] text-gray-600">
        {a}
      </p>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-[280px]
                   bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.05),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-black text-gray-900">
            FAQ
          </h2>
          <span className="mt-2 block h-[3px] w-10 bg-sky-600 rounded-sm" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {faqs.map((col, i) => (
            <div key={i} className="grid gap-8">
              {col.map((item, idx) => (
                <QA key={idx} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
