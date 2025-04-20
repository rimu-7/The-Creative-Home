import React, { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import MobileNav from "./MobileNav";
import NavButton from "./NavButton";
import Logo from "./Logo";
import DarkModeToggle from "./DarkMoodToggle";

const HomeNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return;
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      setIsHidden(currentScroll > lastScrollTop);
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, isOpen]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`sticky top-0 z-50 w-full bg-opacity-90 backdrop-blur-md transition-transform duration-700 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 space-x-6 flex-wrap">
        <Logo />

        <div className="hidden sm:block">
          <DropdownMenu />
        </div>
        <div className="flex justify-between items-center">
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-4xl rounded-md"
          >
            {darkMode ? "☀️" : "🌚"}
          </button> */}
          <DarkModeToggle/>
          <div className="sm:hidden">
            <NavButton isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />}
    </div>
  );
};

export default HomeNav;
