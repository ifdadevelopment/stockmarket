import React from "react";

const IconWorkflow = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 4h12M12 4v6M6 10h12M6 14h12M6 20h12M6 10v10M18 10v10"
      stroke="#E0A400"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect x="4" y="2" width="4" height="4" rx="1" fill="#E0A400" />
    <rect x="4" y="18" width="4" height="4" rx="1" fill="#E0A400" />
    <rect x="16" y="18" width="4" height="4" rx="1" fill="#E0A400" />
  </svg>
);

const IconKey = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M14.5 3a5.5 5.5 0 1 0 3.89 9.39L22 16v3h-3v3h-3v-3h-3l-1.09-1.09"
      stroke="#DAA520"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="14.5" cy="8.5" r="1.5" fill="#DAA520" />
  </svg>
);

const ArrowRight = () => (
  <svg
    className="ml-2 inline-block"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Card({ tone = "white", icon, title, body, ctaLabel = "LEARN MORE", href = "#" }) {
  const base =
    "flex flex-col justify-between rounded-xl p-8 md:p-10 h-full transition-all duration-300";
  const whiteTone =
    "bg-white shadow-[0_24px_48px_-18px_rgba(0,0,0,0.15)] ring-1 ring-black/5";
  const mutedTone = "bg-gray-50 ring-1 ring-black/5";

  return (
    <article className={`${base} ${tone === "white" ? whiteTone : mutedTone}`}>
      <div>
        <div className="text-[0px] mb-6" aria-hidden="true">
          {icon}
        </div>

        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h3>

        <p className="mt-4 text-[18px] sm:text-[17px] leading-7 text-gray-700/80 font-medium max-w-prose">
          {body}
        </p>
      </div>

      <a
        href={href}
        className="mt-6 inline-flex items-center text-sm font-semibold tracking-wide text-gray-900 group"
      >
        <span className="relative">
          <span
            className="px-0.5 pb-[2px] bg-gradient-to-r from-transparent to-transparent"
          >
            {ctaLabel}
          </span>
          <span className="block h-[1.5px] w-full bg-black mt-[2px]" />
        </span>
        <ArrowRight />
      </a>
    </article>
  );
}

export default function AppsSection() {
  return (
    <section
      className="relative overflow-hidden mt-[calc(var(--header-height)+40px)]"
      id="tools"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 md:mb-10">
          <h2
            className="font-grotesque font-black text-black leading-[1.05]
                       text-[40px] sm:text-[48px] md:text-[56px]"
          >
            Apps
          </h2>
          <p
            className="mt-4 text-[22px] sm:text-[20px] leading-7 text-gray-700/80 font-semibold
                       lg:max-w-[520px] lg:justify-self-end"
          >
            The new-age digital infrastructure to empower professional stock traders
            and investors.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Card
            tone="white"
            icon={<IconWorkflow />}
            title="Workflows"
            body="A Workflow based learning platform for stock market learners to learn, practice, and experience on demand, from anywhere. Engaging and effective learning with Quizzes, Tasks, resources, community feedback, opinion polls, and expert support."
            ctaLabel="LEARN MORE"
            href="#"
          />
          <div className="lg:mt-[45px] h-full">
            <Card
              tone="muted"
              icon={<IconKey />}
              title="Primer"
              body="A powerful platform with 10+ featured tools for stock trading and analysis. Make your analysis more efficient with intraday scanners, derivative filters, options strategy builder, intraday simulator, swing trade trackers, and more."
              ctaLabel="VIEW"
              href="#"
            />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 top-1/4 h-[60%]
                   bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06),transparent_60%)]"
      />
    </section>
  );
}
