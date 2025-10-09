import React from "react";

const faqs = [
  // left column
  [
    {
      q: "DO YOU HAVE MONTHLY OR BI–ANNUAL SERVICES?",
      a: "Yes, we currently have short-term plans like 3 months, 6 months and annual. Meanwhile, we make sure the price is affordable to subscribe to.",
    },
    {
      q: "CAN I EXPECT A SURE–SHOT CALL?",
      a: "We take serious efforts in studying the trend/momentum of the stock. However, results of a particular recommendation are not certain. Hence we do not guarantee outcomes.",
    },
    {
      q: "WHO IS YOUR LEAD ANALYST?",
      a: "EQSIS Research Services are delivered by SEBI Registered Research Analyst, Valarmurugan.S (SEBI REG NO: INH200003000).",
    },
    {
      q: "DOES SEBI/NISM REGISTRATION ENSURE PERFORMANCE?",
      a: "Registration from SEBI and certification from NISM do not guarantee performance or provide assurance of returns to investors.",
    },
  ],
  // right column
  [
    {
      q: "HOW MUCH CAPITAL IS NEEDED TO TRADE YOUR RECOMMENDATIONS?",
      a: "We don’t insist on a minimum quantity to trade. We expect clients to take a consistent risk, avoiding overtrades.",
    },
    {
      q: "CAN I SHARE YOUR RECOMMENDATION WITH OTHERS?",
      a: "The subscription is for personal use only. Written permission from EQSIS and a SEBI research analyst license are required to share calls.",
    },
    {
      q: "DO YOU REFUND OR MONEY-BACK OFFER?",
      a: "We don’t commit/guarantee call performance. Our charges are minimal and we provide ideas we believe are good—hence we don’t encourage refunds.",
    },
  ],
];

function QA({ q, a }) {
  return (
    <div>
      <h4 className="text-[20px] sm:text-[20px] font-extrabold tracking-wide text-gray-800 uppercase">
        {q}
      </h4>
      <p className="mt-2 text-[16px] sm:text-[16px] font-semibold leading-7 text-gray-600">
        {a}
      </p>
    </div>
  );
}

export default function FaqSimple() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[24px] sm:text-[28px] md:text-[42px] front-extrabold font-black text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[18px] sm:text-[18px] font-semibold text-gray-600">
            Here is the list of questions generally asked by people. Hope you find your answer here.
            If not feel free to contact us at <span className="font-semibold">+91-9500077790</span>.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
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
