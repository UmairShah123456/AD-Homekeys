"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
  const pathUrl = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  const isHomePage = pathUrl === "/";
  const isTransparent = isHomePage && !sticky;

  return (
    <header
      className={`fixed h-24 top-0 py-1 z-50 w-full transition-all ${
        isTransparent ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex justify-between lg:items-center xl:gap-16 lg:gap-8 px-4 py-6">
        <Logo isTransparent={isTransparent} />
        <nav className={`hidden lg:flex items-center justify-center space-x-10 text-17 font-playfair flex-1 ${
          isTransparent ? "text-white" : "text-midnight_text"
        }`}>
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} isTransparent={isTransparent} />
          ))}
        </nav>
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className={`flex items-center px-6 py-3 gap-2 rounded-lg text-16 font-medium transition-colors ${
              isTransparent
                ? "bg-white text-[#296f53] hover:bg-white/90"
                : "bg-primary text-white hover:bg-secondary"
            }`}
          >
            Contact Us
            <Icon icon="solar:arrow-right-linear" width="20" height="20" />
          </Link>
        </div>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="block lg:hidden p-2 rounded-lg"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 ${isTransparent ? "bg-white" : "bg-forest dark:bg-white"}`}></span>
          <span className={`block w-6 h-0.5 mt-1.5 ${isTransparent ? "bg-white" : "bg-forest dark:bg-white"}`}></span>
          <span className={`block w-6 h-0.5 mt-1.5 ${isTransparent ? "bg-white" : "bg-forest dark:bg-white"}`}></span>
        </button>
      </div>
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darkheader shadow-lg transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border dark:border-dark_border">
          <h2 className="text-lg text-midnight_text dark:text-white">
            Menu
          </h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-midnight_text dark:text-white"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start p-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <div className="mt-6 w-full">
            <Link
              href="/contact"
              className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors w-full gap-2"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Contact Us
              <Icon icon="solar:arrow-right-linear" width="20" height="20" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
