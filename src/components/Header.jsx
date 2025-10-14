// Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { image } from "../../data";
import { HiMenu, HiX } from "react-icons/hi";

const NAV = [
  { title: "Home", link: "/" },
  { title: "Services", link: "/services" },
  { title: "About Us", link: "/about-us" },
  { title: "Blog", link: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    const setVar = () => {
      const el = document.getElementById("main-header");
      if (el)
        document.documentElement.style.setProperty(
          "--header-height",
          `${el.offsetHeight}px`
        );
    };
    setVar();
    window.addEventListener("resize", setVar);
    return () => window.removeEventListener("resize", setVar);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current?.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header
      id="main-header"
      className="bg-white shadow-md fixed w-full z-50 top-0 left-0 transition-all"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={image.logoteam} alt="Logo" className="h-24 w-24" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 font-bold font-grotesque text-gray-600">
            {NAV.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-blue-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col py-2 text-gray-800 font-bold">
          {NAV.map((item) => (
            <li key={item.title} className="border-b">
              <Link
                to={item.link}
                className="py-3 px-6 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
