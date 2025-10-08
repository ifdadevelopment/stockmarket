import React, { useState } from "react";
import { Link } from "react-router-dom";
import { image } from "../../data";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { title: "Training", link: "/training" },
    { title: "Trading Tips", link: "/trading-tips" },
    { title: "Research Tools", link: "/research-tools" },
    { title: "Quiz", link: "/quiz" },
    { title: "Blog", link: "/blog" },
    { title: "Apps", link: "/app" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={image.Logo} alt="Logo" className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-8 font-semibold text-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="hover:text-blue-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-3xl text-blue-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-white border-t shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col py-2 text-gray-800 font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-3 px-6 hover:bg-gray-50 border-b"
            >
              <Link to={item.link} className="w-full">
                {item.title}
              </Link>
              {(item.title === "Trading Tips" ||
                item.title === "Research Tools" ||
                item.title === "Quiz" ||
                item.title === "Apps") && (
                <span className="text-blue-500 font-bold">+</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
