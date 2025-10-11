// Footer.jsx
import React, { useState } from "react";
import { image } from "../../data"

const linkGroups = [
  {
    title: "Invest",
    links: [
      { label: "Blogs", href: "/blogs/" },
      { label: "Web Stories", href: "/blogs/web-stories/" },
      { label: "Academy", href: "/academy/" },
      { label: "Stocks", href: "/stock/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Market Updates", href: "/live-blog/stock/" },
      { label: "Trading Holidays", href: "/nse-holiday/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/life/" },
      { label: "Partner With Us", href: "/partnership/" },
      { label: "Careers", href: "/careers/" },
      { label: "FAQs", href: "/faq/" },
    ],
  },
  {
    title: "Stay Connected",
    links: [{ label: "Contact Us", href: "mailto:Info@tradeohedge.com" }],
  },
];

const socials = [
  {
    href: "https://www.facebook.com/stockGRO/",
    img: image.fb,
    alt: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/stockgro/",
    img: image.ldin,
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/stock_gro",
    img: image.insta,
    alt: "Instagram",
  },
  {
    href: "https://twitter.com/stockgro",
    img: image.twitter,
    alt: "X",
  },
  {
    href: "https://discord.gg/95zFeVyuYr",
    img: image.discord,
    alt: "Discord",
  },
];

// A–Z grid data
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Accordion data (mobile)
const accordionBlocks = [
  {
    title: "Share Price Targets for 2025",
    items: [
      ["adani enterprises share price target 2025", "/live-blog/stock/adani-enterprises-share-price-target-october-10-2025/"],
      ["adani ports and special economic zone share price target 2025", "/live-blog/stock/adani-ports-and-special-economic-zone-share-price-target-october-10-2025/"],
      ["apollo hospitals enterprise share price target 2025", "/live-blog/stock/apollo-hospitals-enterprise-share-price-target-october-10-2025/"],
      ["asian paints share price target 2025", "/live-blog/stock/asian-paints-share-price-target-october-10-2025/"],
      ["axis bank share price target 2025", "/live-blog/stock/axis-bank-share-price-target-october-10-2025/"],
      ["bajaj auto share price target 2025", "/live-blog/stock/bajaj-auto-share-price-target-october-10-2025/"],
      ["bajaj finance share price target 2025", "/live-blog/stock/bajaj-finance-share-price-target-october-10-2025/"],
      ["bajaj finserv share price target 2025", "/live-blog/stock/bajaj-finserv-share-price-target-october-10-2025/"],
      ["bharat petroleum corporation share price target 2025", "/live-blog/stock/bharat-petroleum-corporation-share-price-target-october-10-2025/"],
      ["bharti airtel share price target 2025", "/live-blog/stock/bharti-airtel-share-price-target-october-10-2025/"],
      ["britannia industries share price target 2025", "/live-blog/stock/britannia-industries-share-price-target-october-10-2025/"],
      ["cipla share price target 2025", "/live-blog/stock/cipla-share-price-target-october-10-2025/"],
      ["coal india share price target 2025", "/live-blog/stock/coal-india-share-price-target-october-10-2025/"],
      ["divis laboratories share price target 2025", "/live-blog/stock/divis-laboratories-share-price-target-october-10-2025/"],
      ["dr reddys laboratories share price target 2025", "/live-blog/stock/dr-reddys-laboratories-share-price-target-october-10-2025/"],
      ["eicher motors share price target 2025", "/live-blog/stock/eicher-motors-share-price-target-october-10-2025/"],
      ["grasim industries share price target 2025", "/live-blog/stock/grasim-industries-share-price-target-october-10-2025/"],
      ["hcl technologies share price target 2025", "/live-blog/stock/hcl-technologies-share-price-target-october-10-2025/"],
      ["hdfc bank share price target 2025", "/live-blog/stock/hdfc-bank-share-price-target-october-10-2025/"],
      ["hdfc life insurance company share price target 2025", "/live-blog/stock/hdfc-life-insurance-company-share-price-target-october-10-2025/"],
      ["hero motocorp share price target 2025", "/live-blog/stock/hero-motocorp-share-price-target-october-10-2025/"],
      ["hindalco industries share price target 2025", "/live-blog/stock/hindalco-industries-share-price-target-october-10-2025/"],
      ["hindustan unilever share price target 2025", "/live-blog/stock/hindustan-unilever-share-price-target-october-10-2025/"],
      ["icici bank share price target 2025", "/live-blog/stock/icici-bank-share-price-target-october-10-2025/"],
      ["itc share price target 2025", "/live-blog/stock/itc-share-price-target-october-10-2025/"],
      ["indusind bank share price target 2025", "/live-blog/stock/indusind-bank-share-price-target-october-10-2025/"],
      ["infosys share price target 2025", "/live-blog/stock/infosys-share-price-target-october-10-2025/"],
      ["jsw steel share price target 2025", "/live-blog/stock/jsw-steel-share-price-target-october-10-2025/"],
      ["kotak mahindra bank share price target 2025", "/live-blog/stock/kotak-mahindra-bank-share-price-target-october-10-2025/"],
      ["ltimindtree share price target 2025", "/live-blog/stock/ltimindtree-share-price-target-october-10-2025/"],
      ["larsen and toubro share price target 2025", "/live-blog/stock/larsen-and-toubro-share-price-target-october-10-2025/"],
      ["mahindra and mahindra share price target 2025", "/live-blog/stock/mahindra-and-mahindra-share-price-target-october-10-2025/"],
      ["maruti suzuki india share price target 2025", "/live-blog/stock/maruti-suzuki-india-share-price-target-october-10-2025/"],
      ["ntpc share price target 2025", "/live-blog/stock/ntpc-share-price-target-october-10-2025/"],
      ["oil and natural gas corporation share price target 2025", "/live-blog/stock/oil-and-natural-gas-corporation-share-price-target-october-10-2025/"],
      ["power grid corporation of india share price target 2025", "/live-blog/stock/power-grid-corporation-of-india-share-price-target-october-10-2025/"],
      ["reliance industries share price target 2025", "/live-blog/stock/reliance-industries-share-price-target-october-10-2025/"],
      ["sbi life insurance company share price target 2025", "/live-blog/stock/sbi-life-insurance-company-share-price-target-october-10-2025/"],
      ["shriram transport finance company share price target 2025", "/live-blog/stock/shriram-transport-finance-company-share-price-target-october-10-2025/"],
      ["state bank of india share price target 2025", "/live-blog/stock/state-bank-of-india-share-price-target-october-10-2025/"],
      ["sun pharmaceutical industries share price target 2025", "/live-blog/stock/sun-pharmaceutical-industries-share-price-target-october-10-2025/"],
      ["tata consultancy services share price target 2025", "/live-blog/stock/tata-consultancy-services-share-price-target-october-10-2025/"],
      ["tata consumer products share price target 2025", "/live-blog/stock/tata-consumer-products-share-price-target-october-10-2025/"],
      ["tata motors share price target 2025", "/live-blog/stock/tata-motors-share-price-target-october-10-2025/"],
      ["tata steel share price target 2025", "/live-blog/stock/tata-steel-share-price-target-october-10-2025/"],
      ["tech mahindra share price target 2025", "/live-blog/stock/tech-mahindra-share-price-target-october-10-2025/"],
      ["titan company share price target 2025", "/live-blog/stock/titan-company-share-price-target-october-10-2025/"],
      ["ultratech cement share price target 2025", "/live-blog/stock/ultratech-cement-share-price-target-october-10-2025/"],
      ["wipro share price target 2025", "/live-blog/stock/wipro-share-price-target-october-10-2025/"],
      ["nestle india share price target 2025", "/live-blog/stock/nestle-india-share-price-target-october-10-2025/"],
    ],
  },
  {
    title: "Popular Stocks",
    items: [
      ["adani enterprises share price", "/stock/adani-enterprises-share-price/"],
      ["tata motors share price", "/stock/tata-motors-share-price/"],
      ["tata steel share price", "/stock/tata-steel-share-price/"],
      ["infosys share price", "/stock/infosys-share-price/"],
      ["state bank of india share price", "/stock/state-bank-of-india-share-price/"],
      ["hdfc bank share price", "/stock/hdfc-bank-share-price/"],
      ["itc share price", "/stock/itc-share-price/"],
      ["wipro share price", "/stock/wipro-share-price/"],
      ["adani ports share price", "/stock/adani-ports-and-special-economic-zone-share-price/"],
      ["bajaj finance share price", "/stock/bajaj-finance-share-price/"],
      ["icici bank share price", "/stock/icici-bank-share-price/"],
      ["coal india share price", "/stock/coal-india-share-price/"],
      ["ongc share price", "/stock/oil-and-natural-gas-corporation-share-price/"],
      ["titan company share price", "/stock/titan-company-share-price/"],
      ["asian paints share price", "/stock/asian-paints-share-price/"],
      ["axis bank share price", "/stock/axis-bank-share-price/"],
      ["bharat petroleum share price", "/stock/bharat-petroleum-corporation-share-price/"],
      ["larsen & toubro share price", "/stock/larsen-and-toubro-share-price/"],
      ["ntpc share price", "/stock/ntpc-share-price/"],
      ["bajaj finserv share price", "/stock/bajaj-finserv-share-price/"],
      ["hcl technologies share price", "/stock/hcl-technologies-share-price/"],
      ["hindalco industries share price", "/stock/hindalco-industries-share-price/"],
      ["hudco share price", "/stock/housing-and-urban-development-corporation-share-price/"],
      ["maruti share price", "/stock/maruti-suzuki-india-share-price/"],
      ["power grid corporation of india share price", "/stock/power-grid-corporation-of-india-share-price/"],
      ["tech mahindra share price", "/stock/tech-mahindra-share-price/"],
      ["hdfc life share price", "/stock/hdfc-life-insurance-company-share-price/"],
      ["reliance industries share price", "/stock/reliance-industries-share-price/"],
      ["upl share price", "/stock/upl-share-price/"],
      ["bajaj auto share price", "/stock/bajaj-auto-share-price/"],
      ["cipla share price", "/stock/cipla-share-price/"],
      ["indusind bank share price", "/stock/indusind-bank-share-price/"],
      ["nestle india share price", "/stock/nestle-india-share-price/"],
      ["Jindal Steel share price", "/stock/jindal-steel-and-power-share-price/"],
      ["britannia industries share price", "/stock/britannia-industries-share-price/"],
      ["divis lab share price", "/stock/divis-laboratories-share-price/"],
      ["eicher motors share price", "/stock/eicher-motors-share-price/"],
      ["ultratech cement share price", "/stock/ultratech-cement-share-price/"],
      ["apollo hospital share price", "/stock/apollo-hospitals-enterprise-share-price/"],
      ["bharti airtel share price", "/stock/bharti-airtel-share-price/"],
      ["grasim industries share price", "/stock/grasim-industries-share-price/"],
      ["ltimindtree share price", "/stock/ltimindtree-share-price/"],
      ["hero motocorp share price", "/stock/hero-motocorp-share-price/"],
      ["sbi life share price", "/stock/sbi-life-insurance-company-share-price/"],
      ["kotak mahindra bank share price", "/stock/kotak-mahindra-bank-share-price/"],
      ["sun pharma adv share price", "/stock/sun-pharmaceutical-industries-share-price/"],
      ["dr reddy's laboratories share price", "/stock/dr-reddys-laboratories-share-price/"],
      ["mahindra & mahindra share price", "/stock/mahindra-and-mahindra-share-price/"],
      ["tata consumer products share price", "/stock/tata-consumer-products-share-price/"],
      ["tata consultancy services share price", "/stock/tata-consultancy-services-share-price/"],
    ],
  },
  {
    title: "Calculators",
    items: [
      ["Financial Independence", "/calculators/financial-independence-calculator/"],
      ["SIP Calculator", "/calculators/sip-calculator/"],
      ["PPF Calculator", "/calculators/ppf-calculator/"],
      ["EPF Calculator", "/calculators/epf-calculator/"],
      ["FD Calculator", "/calculators/fd-calculator/"],
      ["HRA Calculator", "/calculators/hra-calculator/"],
      ["EMI Calculator", "/calculators/emi-calculator/"],
      ["Car Loan Calculator", "/calculators/car-loan-emi-calculator/"],
      ["Home Loan Calculator", "/calculators/home-loan-emi-calculator/"],
      ["Income Tax Calculator", "/calculators/tax-calculator/"],
      ["Simple Interest Calculator", "/calculators/simple-interest-calculator/"],
      ["RD Calculator", "/calculators/rd-calculator/"],
      ["GST Calculator", "/calculators/gst-calculator/"],
      ["NPS Calculator", "/calculators/nps-calculator/"],
      ["NSC Calculator", "/calculators/nsc-calculator/"],
      ["Salary Calculator", "/calculators/salary-calculator/"],
      ["SCSS Calculator", "/calculators/scss-calculator/"],
      ["SWP Calculator", "/calculators/swp-calculator/"],
      ["Sukanya Samriddhi Yojana Calculator", "/calculators/sukanya-samriddhi-yojana-calculator/"],
      ["Post Office MIS Calculator", "/calculators/post-office-monthly-income-scheme-calculator/"],
      ["Mutual Fund Returns Calculator", "/calculators/mutual-fund-returns-calculator/"],
      ["Inflation Calculator", "/calculators/inflation-calculator/"],
      ["Home Loan Eligibility Calculator", "/calculators/home-loan-eligibility-calculator/"],
      ["Gratuity Calculator", "/calculators/gratuity-calculator/"],
      ["Flat vs Reducing Rate Calculator", "/calculators/flat-vs-reducing-rate-calculator/"],
      ["Compound Interest Calculator", "/calculators/compound-interest-calculator/"],
      ["CAGR Calculator", "/calculators/cagr-calculator/"],
      ["APY Calculator", "/calculators/apy-calculator/"],
      ["Brokerage Calculator", "/calculators/brokerage-calculator/"],
      ["Step Up SIP Calculator", "/calculators/step-up-sip-calculator/"],
      ["Stock Average Calculator", "/calculators/stock-average-calculator/"],
      ["TDS Calculator", "/calculators/tds-calculator/"],
      ["Interest Rate", "/calculators/interest-rate-calculator/"],
      ["ELSS Calculator", "/calculators/elss-calculator/"],
    ],
  },
  {
    title: "Currency Converter",
    items: [
      ["INR to USD", "/currency-converter/inr-to-usd/"],
      ["INR to AED", "/currency-converter/inr-to-aed/"],
      ["INR to AUD", "/currency-converter/inr-to-aud/"],
      ["INR to EUR", "/currency-converter/inr-to-eur/"],
      ["INR to GBP", "/currency-converter/inr-to-gbp/"],
      ["INR to CHF", "/currency-converter/inr-to-chf/"],
    ],
  },
];

const Accordion = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-4">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <p className="text-[16px] opacity-60 hover:opacity-100">{title}</p>
        <img
          alt=""
          width="10"
          height="7"
          className={`h-[7px] w-[10px] ml-[6px] transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          src="/_next/static/media/downOrange.0a005902.svg"
        />
      </button>
      <div className={`grid transition-all ${open ? "grid-cols-1 lg:grid-cols-4 mt-3 gap-x-3" : "hidden"}`}>
        {items.map(([label, href], i) => (
          <a key={i} href={href} className="mt-2 opacity-60 hover:opacity-100 hover:underline capitalize">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer
      className="text-white relative z-[3] w-full font-publicSans bg-home-page-gradient"
      style={{
        background:
          "linear-gradient(52.27deg,#1F2127 4.87%,#6545D7 76.57%)",
      }}
    >
      <div className="relative z-[5] mx-auto xl:max-w-[1280px]">
        <div className="px-8 lg:px-20 pt-[42px] lg:pt-20 pb-0 flex flex-col lg:flex-row">
          <div className="flex-0">
            <div className="flex items-center">
              <a href="/" className="relative block w-[170px] h-[50px] lg:w-[220px] lg:h-[65px]">
                <img
                  alt="StockGro"
                  src={image.stockgroWhite}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </a>
            </div>

            <div className="flex items-start mt-4 max-w-[320px]">
              <img
                alt="location"
                src={image.location}
                className="h-5 w-5 mt-1"
              />
              <div className="ml-4 text-[14px] opacity-80">
                3rd Floor Rana Nagar Colony<br /> Chhitupur Sigra Varanasi,
                <br />
                Uttar Pradesh 221010.
              </div>
            </div>

            <div className="flex flex-col mt-4 font-bold">
              <div className="flex items-center">
                <img
                  alt="mail"
                  src={image.mail}
                  className="h-5 w-5 mt-1"
                />
                <a href="mailto:Info@tradeohedge.com" className="ml-4 text-[14px] opacity-80">
                  Info@tradeohedge.com
                </a>
              </div>

              {/* Mobile CTAs */}
              <div className="mt-8 min-w-[200px] lg:hidden">
                <a
                  href="https://app.stockgro.club"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#7e6bff]/30 px-4 py-2 backdrop-blur-md"
                >
                  <div className="flex items-center gap-2">
                    <img
                      alt="Play"
                      src={image.googlePlayWhite}
                      className="h-[14px] w-[13px]"
                    />
                    <div className="h-4 w-px bg-white/50" />
                    <img
                      alt="AppStore"
                       src={image.appleIcon}
                      className="h-[14px] w-[12px]"
                    />
                  </div>
                  <span className="text-[14px]">Download Now</span>
                </a>
              </div>

              <div className="mt-4 min-w-[200px] lg:hidden ">
                <a
                  href="https://app.stockgro.club"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex font-figtree bg-btnOrangeGradient shadow-btnOrange items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur-md"
                >
                  <img
                    alt="Web"
                    src={image.desktopwhite}
                    className="h-5 w-5"
                  />
                  <span className="text-[14px]">Try StockGro Web</span>
                </a>
              </div>
            </div>
          </div>

          {/* Link columns + socials */}
          <div className="flex-1 lg:ml-16 grid grid-cols-2 md:grid-cols-4 gap-x-5 mt-12 lg:mt-0">
            {linkGroups.map((group) => (
              <div key={group.title} className="font-figtree">
                <div className="font-bold text-[18px] lg:text-[20px] leading-6 pb-2">{group.title}</div>
                <ul>
                  {group.links.map((l) => (
                    <li key={l.href} className="mt-[18px]">
                      <a href={l.href} className="opacity-60 hover:opacity-100 text-[16px]">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Socials + BFF (last col stacking) */}
            <div className="col-span-2 md:col-span-1 flex flex-col">
              <div className="mt-12 lg:mt-0 font-figtree">
                <div className="font-bold text-[18px] lg:text-[20px] leading-6 pb-2">Follow Us</div>
                <div className="mt-4 flex flex-wrap gap-1">
                  {socials.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10"
                    >
                      <img alt={s.alt} src={s.img} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <a href="/bff/" className="mt-6 block lg:hidden" target="_parent">
                <img
                  alt="BFF"
                   src={image.bffLogo}
                  className="h-auto w-[160px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop CTAs + BFF */}
        <div className="hidden lg:flex justify-between px-8 lg:px-20 mt-6">
          <div className="flex gap-4 self-end">
            <a
              href="https://app.stockgro.club"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#7e6bff]/30 px-4 py-3 backdrop-blur-md min-w-[200px]"
            >
              <div className="flex items-center gap-2">
                <img alt="" src={image.googlePlayWhite} className="h-4 w-[14px]" />
                <div className="h-4 w-px bg-white/50" />
                <img alt="" src={image.appleIcon} className="h-4 w-[13.5px]" />
              </div>
              <span>Download Now</span>
            </a>
            <a
              href="https://app.stockgro.club"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl font-figtree bg-btnOrangeGradient shadow-btnOrange  bg-white/10 px-4 py-3 backdrop-blur-md min-w-[200px]"
            >
              <img alt="" src={image.desktopwhite} className="h-6 w-6" />
              <span>Try StockGro Web</span>
            </a>
          </div>
          <a href="/bff/" className="block" target="_parent">
            <img
              alt="BFF"
              src={image.bffLogo}
              className="h-auto w-[160px]"
            />
          </a>
        </div>

        {/* A–Z stocks row */}
        {/* <div className="mt-8 border-y border-[#D4D2E366] mx-8 lg:mx-[68px] py-8 px-[6px]">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-start lg:items-center">
            <p className="flex-1 text-[18px] font-semibold">Stocks</p>
            <div className="grid grid-cols-9 gap-y-2 -ml-3 lg:ml-0">
              {alpha.map((letter) => (
                <a key={letter} href={`/stock/${letter.toLowerCase()}/`} className="flex-1">
                  <p className="px-3 text-[16px] font-semibold border-r border-white/40 hover:opacity-60 hover:underline">
                    {letter}
                  </p>
                </a>
              ))}
            </div>
            <a href="/stock/" className="lg:pl-3 mt-3 lg:mt-0">
              <p className="text-[16px] font-semibold">Others</p>
            </a>
          </div>
        </div> */}

        {/* Accordions (mobile) / link lists (desktop are above) */}
        <div className="border-b border-[#D4D2E366] mx-8 lg:mx-[68px] pt-8 pb-4 px-[6px]">
          {/* Mobile only accordions */}
          <div className="lg:hidden">
            {accordionBlocks.map((blk) => (
              <Accordion key={blk.title} title={blk.title} items={blk.items} />
            ))}
          </div>

          {/* Desktop headers (collapsed content is already available in main columns) */}
          <div className="hidden lg:flex gap-6 justify-between">
            {accordionBlocks.map((blk) => (
              <p key={blk.title} className="text-[16px] opacity-60 hover:opacity-100">
                {blk.title}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mx-8 lg:mx-[68px] text-[12px] pb-9 pt-6 px-[6px] flex flex-col lg:flex-row justify-between text-center lg:text-left">
          <div>
            <p className="flex flex-col lg:flex-row items-center lg:items-start">
              Copyrights © 2025 All rights reserved by
              <span className="text-[#FF693A] lg:ml-1">Assetgro Fintech Private Limited</span>
            </p>
            <p className="opacity-40 mt-4 lg:mt-1">SEBI RA Reg : INH000018300</p>
          </div>
          <div className="flex items-center justify-center lg:justify-end mt-5 lg:mt-0 gap-3">
            <a href="/tandc/" className="opacity-60 hover:opacity-100">
              Terms &amp; Conditions
            </a>
            <div className="h-1 w-1 bg-[#FD6B42] rounded-full" />
            <a href="/privacy/" className="opacity-60 hover:opacity-100">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
