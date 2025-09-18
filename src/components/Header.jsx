"use client"; // needed if you’re in app/ directory

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useAnalytics from "@/hooks/useAnalytics"; // analytics
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // decide extra nav item
  const extraNav =
    pathname === "/hospitals"
      ? { href: "/", label: "For Patients" }
      : { href: "/hospitals", label: "For Hospitals" };
  const { trackEvent } = useAnalytics();

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto flex justify-between items-center py-2 md:py-4 px-2">
        {/* Logo */}
        <div className="flex flex-row items-center gap-5">
          <Image
            src="/finnova-logo-transparent.png"
            alt="Logo"
            width={150}
            height={150}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex items-center">
          <a
            href="#home"
            className="text-purpleSecondary hover:text-purplePrimary"
            onClick={() => trackEvent("Header Home Link")}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-purpleSecondary hover:text-purplePrimary"
            onClick={() => trackEvent("Header About Link")}
          >
            About
          </a>
          <a
            href="#benefits"
            className="text-purpleSecondary hover:text-purplePrimary"
            onClick={() => trackEvent("Header Services Link")}
          >
            Benefits
          </a>
          <a
            href="#faq"
            className="text-purpleSecondary hover:text-purplePrimary"
            onClick={() => trackEvent("Header FAQ Link")}
          >
            FAQs
          </a>
          {/* dynamic link */}
          <a
            href={extraNav.href}
            className="text-purpleSecondary hover:text-purplePrimary"
            onClick={() => trackEvent("Header " + extraNav.label + " Link")}
          >
            {extraNav.label}
          </a>
          <a
            href="#contact"
            className="text-purpleSecondary hover:text-purplePrimary"
          >
            <button
              onClick={() => trackEvent("Header Contact Us Button")}
              className="bg-pinkCTA text-white rounded-full px-4 py-2"
            >
              Contact Us
            </button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-darkGray"
          onClick={() => {
            setIsOpen(true);
            trackEvent("Mobile Menu Open");
          }}
        >
          <HiMenu />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => {
          setIsOpen(false);
          trackEvent("Mobile Menu Overlay Click");
        }}
      ></div>

      {/* Off-canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-purplePrimary">Menu</h2>
          <button
            className="text-2xl text-purpleSecondary"
            onClick={() => {
              setIsOpen(false);
              trackEvent("Mobile Menu Close");
            }}
          >
            <HiX />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 p-4">
          <a
            href="#home"
            className="text-purpleSecondary hover:text-purplePrimary"
            onClick={() => {
              setIsOpen(false);
              trackEvent("Nav: Home");
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-purpleSecondary hover:text-purplePrimary"
            onClick={() => {
              setIsOpen(false);
              trackEvent("Nav: About");
            }}
          >
            About
          </a>
          <a
            href="#benefits"
            className="text-purpleSecondary hover:text-purplePrimary"
            onClick={() => {
              setIsOpen(false);
              trackEvent("Nav: Services");
            }}
          >
            Benefits
          </a>
          <a
            href="#faq"
            className="text-purpleSecondary hover:text-purplePrimary"
            onClick={() => {
              setIsOpen(false);
              trackEvent("Nav: FAQ");
            }}
          >
            FAQs
          </a>
          {/* dynamic link */}
          <a
            href={extraNav.href}
            className="text-purpleSecondary hover:text-purplePrimary"
            onClick={() => {
              setIsOpen(false);
              trackEvent(`Nav: ${extraNav.label}`);
            }}
          >
            {extraNav.label}
          </a>

          <a
            href="#contact"
            className="text-purpleSecondary hover:bg-purplePrimary mx-auto md:mx-0"
            onClick={() => {
              setIsOpen(false);
              trackEvent("Nav: Contact Us");
            }}
          >
            <button className="bg-pinkCTA text-white rounded-full mt-4 md:mt-0 px-4 py-2">
              Contact Us
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}
