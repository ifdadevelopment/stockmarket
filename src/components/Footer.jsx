import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube, FaGoogle } from "react-icons/fa";

const links = {
  quick: [
    { label: "Primer", href: "#" },
    { label: "Workflows", href: "#" },
    { label: "SIP Calculator", href: "#" },
    { label: "Risk Management Calculator", href: "#" },
  ],
  company: [
    { label: "Who we are?", href: "#" },
    { label: "Ask EQSIS", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Careers", href: "#" },
  ],
  regulatory: [
    { label: "Regulatory Disclosure", href: "#" },
    { label: "Investor Charter", href: "#" },
    { label: "Complaint Redressal & SEBI SCORES", href: "#" },
    { label: "Escalation Matrix & Grievance Redressal", href: "#" },
    { label: "Monthly Disclosure of Investor Complaints", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 font-extrabold text-5xl leading-none">
              <span className="text-primary">EQ</span>
              <span className="text-secondary">SIS</span>
            </div>

            <address className="not-italic text-gray-700 space-y-1">
              <p className="font-black text-lg underline">Head Office</p>
              <p className="font-bold text-md"># 6 / 11, 3rd Cross Street,</p>
              <p className="font-bold text-md">Trustpuram, Kodambakkam,</p>
              <p className="font-bold text-md">Chennai – 600024</p>
              <p className="font-bold text-md">Ph: <a className="font-bold text-primary" href="tel:+919500077790">+91 95000 77790</a></p>
              <p className="font-bold text-md">Email: <a className="font-bold text-primary" href="mailto:info@eqsis.com">info@eqsis.com</a></p>
            </address>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-3xl items-center gap-3 rounded-xl  px-4 py-3 text-primary shadow hover:opacity-95"
            >
              <FaLocationDot className="text-3xl" />
              <span className="text-left">
                <span className="block text-3xl">Find us in</span>
                <span className="block font-bold -mt-0.5">Google Map</span>
              </span>
            </a>
          </div>
          <div className="text-gray-700 space-y-6">
            <h3 className="font-bold text-md uppercase tracking-wide text-gray-500">
              Training Centers in Chennai
            </h3>

            <div className="space-y-1">
              <p className="font-black text-lg underline">Kodambakkam</p>
              <p className="font-bold text-md"># 6 / 11, 3rd Cross Street, Trustpuram, Kodambakkam,</p>
              <p className="font-bold text-md">Chennai – 600024</p>
              <p className="font-bold text-md">Ph: <a className="font-bold text-primary" href="tel:+919500077790">+91 95000 77790</a></p>
              <p className="font-bold text-md">Email: <a className="font-bold text-primary" href="mailto:info@eqsis.com">info@eqsis.com</a></p>
            </div>

            <div className="space-y-1">
              <p className="font-black text-lg underline">Guindy</p>
              <p className="font-bold text-md">2nd Floor, A’ Wing, MGM Diamond Building, No 136,</p>
              <p className="font-bold text-md">Velachery Rd, Saidapet, Chennai – 600015</p>
              <p className="font-bold text-md">Ph: <a className="font-bold text-primary" href="tel:+919500665095">+91 95006 65095</a></p>
              <p className="font-bold text-md">Email: <a className="font-bold text-primary" href="mailto:mail@eqsis.com">mail@eqsis.com</a></p>
            </div>
          </div>
          <nav aria-label="Quick links">
            <h3 className="font-bold text-md uppercase tracking-wide text-gray-500">
              Quick Link
            </h3>
            <ul className="mt-4 space-y-3 list-disc list-inside text-blue-600">
              {links.quick.map((l) => (
                <li key={l.label}>
                  <a className="font-bold text-md" href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid gap-8">
            <nav aria-label="Company links">
              <h3 className="font-bold text-md uppercase tracking-wide text-gray-500">
                Company Links
              </h3>
              <ul className="mt-4 space-y-3 list-disc list-inside text-gray-800">
                {links.company.map((l) => (
                  <li key={l.label}>
                    <a className="font-bold text-md" href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Regulatory links">
              <h3 className="font-bold text-md uppercase tracking-wide  font-bold text-md">
                Regulatory Links
              </h3>
              <ul className="mt-4 space-y-3 list-disc list-inside text-gray-800">
                {links.regulatory.map((l) => (
                  <li key={l.label}>
                    <a className="font-bold text-md" href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col-reverse font-bold text-md items-center justify-between gap-4 border-t pt-6 text-md text-gray-600 md:flex-row">
          <p>© {year} EQSIS. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline font-bold text-md">Terms and Conditions</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline font-bold text-md">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline font-bold text-md">Regulatory disclosure</a>
          </p>

          <div className="flex items-center gap-3">
            <a aria-label="YouTube" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2B4AA0] text-white">
              <FaYoutube />
            </a>
            <a aria-label="Google" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E02424] text-white">
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
