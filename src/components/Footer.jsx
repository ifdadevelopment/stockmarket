import React, { useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6"; 
import { Link } from "react-router-dom";
import { image } from "../../data"; 

const linkGroups = [
  {
    title: "Invest",
    links: [
      { label: "Blogs", href: "/blog" },
      // { label: "Web Stories", href: "/blogs/web-stories/" },
      // { label: "Academy", href: "/academy/" },
      // { label: "Stocks", href: "/stock/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Login", href: "/login" },
      // { label: "Careers", href: "/careers/" },
      // { label: "FAQs", href: "/faq/" },
    ],
  },
  {
    title: "Stay Connected",
    links: [{ label: "Contact Us", href: "mailto:csnewtondhar@gmail.com" }],
  },
];

const socials = [
  {
    href: "https://www.facebook.com",
    icon: <FaFacebookF />,
    alt: "Facebook",
  },
  {
    href: "https://www.linkedin.com",
    icon: <FaLinkedinIn />,
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
    alt: "Instagram",
  },
  {
    href: "https://twitter.com/",
    icon: <FaXTwitter />,
    alt: "X (Twitter)",
  },
];

export default function Footer() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  return (
    <footer
      className="text-white relative z-[3] w-full font-publicSans bg-[#0E61F6]"
      style={{
        background: "linear-gradient(52.27deg,#1F2127 4.87%,#6545D7 76.57%)",
      }}
    >
      <div className="relative z-[5] mx-auto xl:max-w-[1280px]">
        <div className="px-8 lg:px-20 pt-[42px] lg:pt-20 pb-0 flex flex-col lg:flex-row">
          <div className="flex-0">
            <div className="flex items-center">
              <Link
                to="/"
                className="relative block w-[170px] h-[50px] lg:w-[220px] lg:h-[165px]"
              >
                <img
                  alt="Tradeohedge"
                  src={image.stockgroWhite || "/default-logo.png"}  
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </Link>
            </div>

            <div className="flex items-start mt-4 max-w-[320px]">
              <img alt="location" src={image.location || "/default-location.png"} className="h-5 w-5 mt-1" />
              <div className="ml-4 text-[14px] opacity-80">
                3rd Floor Rana Nagar Colony<br /> Chhitupur Sigra Varanasi,
                <br />
                Uttar Pradesh 221010.
              </div>
            </div>

            <div className="flex flex-col mt-4 font-bold">
              <div className="flex items-center">
                <img alt="mail" src={image.mail || "/default-mail-icon.png"} className="h-3 w-3 mt-1" />
                <a
                  href="mailto:csnewtondhar@gmail.com"
                  className="ml-4 text-[14px] opacity-80"
                >
                  csnewtondhar@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:ml-16 grid grid-cols-2 md:grid-cols-4 gap-x-5 mt-12 lg:mt-0">
            {linkGroups.map((group) => (
              <div key={group.title} className="font-figtree">
                <div className="font-bold text-[18px] lg:text-[20px] leading-6 pb-2">
                  {group.title}
                </div>
                <ul>
                  {group.links.map((l) => (
                    <li key={l.href} className="mt-[18px]">
                      <Link
                        to={l.href} 
                        className="opacity-60 hover:opacity-100 text-[16px]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 md:col-span-1 flex flex-col">
              <div className="mt-12 lg:mt-0 font-figtree">
                <div className="font-bold text-[18px] lg:text-[20px] leading-6 pb-2">
                  Follow Us
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                      aria-label={s.alt}
                    >
                      <span className="text-white text-lg">{s.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-8 lg:mx-[68px] text-[12px] pb-9 pt-6 px-[6px] flex flex-col lg:flex-row justify-between text-center lg:text-left">
          <div>
            <p className="flex flex-col lg:flex-row items-start">
              Copyrights © 2025 All rights reserved by
              <span className="text-secondary lg:ml-1">
                NKD AND ASSOCIATES
              </span>
            </p>
            <p className="opacity-40 mt-4 lg:mt-1">SEBI RA Reg : INH000010593</p>
          </div>
          <div className="flex lg:justify-end lg:mt-0 gap-3">
            <Link to="/terms-conditions" className="opacity-60 hover:opacity-100">
              Terms &amp; Conditions
            </Link>
            <div className="h-1 w-1 mt-2 bg-white rounded-full" />
            <Link to="/privacy-policy" className="opacity-60 hover:opacity-100">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
