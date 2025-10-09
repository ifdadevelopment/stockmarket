// Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { image } from "../../data";
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";

const NAV = [
  { title: "Training", link: "/training" },
  {
    title: "Trading Tips",
    link: "/trading-tips",
    children: [
      { title: "Intraday Tips", link: "/trading-tips/intraday" },
      { title: "Swing Picks", link: "/trading-tips/swing" },
      { title: "Options Ideas", link: "/trading-tips/options" },
    ],
  },
  {
    title: "Research Tools",
    link: "/research-tools",
    children: [
      { title: "Screeners", link: "/research-tools/screeners" },
      { title: "Derivatives", link: "/research-tools/derivatives" },
      { title: "Backtests", link: "/research-tools/backtests" },
    ],
  },
  {
    title: "Quiz",
    link: "/quiz",
    children: [
      { title: "Beginner", link: "/quiz/beginner" },
      { title: "Intermediate", link: "/quiz/intermediate" },
      { title: "Advanced", link: "/quiz/advanced" },
    ],
  },
  { title: "Blog", link: "/blog" },
  {
    title: "Apps",
    link: "/app",
    children: [
      { title: "Workflows", link: "/app/workflows" },
      { title: "Primer", link: "/app/primer" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState(null);
  const [hoverIdx, setHoverIdx] = useState(null);
  const ref = useRef(null);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const OPEN_DELAY = 120;  
  const CLOSE_DELAY = 220;

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };

  const scheduleOpen = (idx) => {
    clearTimers();
    openTimer.current = setTimeout(() => setHoverIdx(idx), OPEN_DELAY);
  };
  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setHoverIdx(null), CLOSE_DELAY);
  };

  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    const setVar = () => {
      const el = document.getElementById("main-header");
      if (el) document.documentElement.style.setProperty("--header-height", `${el.offsetHeight}px`);
    };
    setVar();
    window.addEventListener("resize", setVar);
    return () => window.removeEventListener("resize", setVar);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current?.contains(e.target)) setHoverIdx(null);
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
            <img src={image.Logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 font-bold font-grotesque text-gray-600">
            {NAV.map((item, i) => {
              const hasChild = Array.isArray(item.children) && item.children.length > 0;
              const open = hasChild && hoverIdx === i;

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => hasChild && scheduleOpen(i)}
                  onMouseLeave={() => hasChild && scheduleClose()}
                >
                  <button
                    type="button"
                    className="hover:text-blue-600 transition-colors inline-flex items-center gap-1 focus:outline-none"
                    onFocus={() => hasChild && scheduleOpen(i)}
                    onBlur={() => hasChild && scheduleClose()}
                    aria-haspopup={hasChild ? "menu" : undefined}
                    aria-expanded={open ? "true" : "false"}
                  >
                    <Link to={item.link} className="inline-flex items-center gap-1">
                      {item.title}
                    </Link>
                    {hasChild && (
                      open ? (
                        <HiChevronUp className="text-blue-600 text-lg" aria-hidden="true" />
                      ) : (
                        <HiChevronDown className="text-blue-600 text-lg" aria-hidden="true" />
                      )
                    )}
                  </button>

                  {hasChild && open && (
                    <div
                      role="menu"
                      className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/10 p-2"
                      onMouseEnter={() => scheduleOpen(i)}  // keep open while hovering panel
                      onMouseLeave={() => scheduleClose()}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          to={child.link}
                          className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          role="menuitem"
                          onClick={() => setHoverIdx(null)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile burger */}
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

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-white border-t shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col py-2 text-gray-800 font-bold">
          {NAV.map((item, idx) => {
            const hasChild = Array.isArray(item.children) && item.children.length > 0;
            const open = openMobileSub === idx;
            return (
              <li key={item.title} className="border-b">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.link}
                    className="py-3 px-6 flex-1 hover:bg-gray-50"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>

                  {hasChild && (
                    <button
                      className="px-6 py-3 text-blue-600"
                      aria-label="Toggle submenu"
                      aria-expanded={open ? "true" : "false"}
                      onClick={() => setOpenMobileSub(open ? null : idx)}
                    >
                      {open ? <HiChevronUp className="text-xl" /> : <HiChevronDown className="text-xl" />}
                    </button>
                  )}
                </div>

                {/* Mobile submenu (accordion) */}
                {hasChild && (
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-3 pt-1 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.link}
                            className="py-2 text-sm text-gray-700 hover:text-blue-600"
                            onClick={() => {
                              setMenuOpen(false);
                              setOpenMobileSub(null);
                            }}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
