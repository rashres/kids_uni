"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigationItems = [
    {
      label: "About",
      href: "/about",
      items: [
        { label: "Our History", href: "/about/our-history" },
        { label: "Board of Directors", href: "/about/board-of-directors" },
        { label: "Students & Staff Spotlight", href: "/about/spotlight" },
      ]
    },
    {
      label: "Programs & Services",
      href: "/programs-services",
      items: [
        { label: "Our Programs", href: "/programs-services/our-programs" },
        { label: "Our Approach", href: "/programs-services/our-approach" },
        { label: "Outcomes", href: "/programs-services/outcomes" },
        { label: "Dedication to Quality", href: "/programs-services/dedication-to-quality" },
      ]
    },
    {
      label: "Kids-U Blog",
      href: "/blog",
      items: []
    },
    {
      label: "Support Kids-U",
      href: "/support",
      items: [
        { label: "Volunteer", href: "/support/volunteer" },
        { label: "Partner", href: "/support/partner" },
        { label: "Locations", href: "/support/locations" },
      ]
    },
    {
      label: "Apartment Owners",
      href: "/apartment-owners",
      items: []
    },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Top utility bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-end gap-8 h-12 text-sm">
            <Link href="/donate" className="text-gray-600 hover:text-[#E63946] font-semibold">
              Donate
            </Link>
            <Link href="/support/volunteer" className="text-gray-600 hover:text-[#E63946] font-semibold">
              Volunteer
            </Link>
            <Link href="/connect/contact" className="text-gray-600 hover:text-[#E63946] font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <div className="absolute inset-0 bg-[#E63946] rounded-full"></div>
                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#E63946] font-black text-xl md:text-2xl leading-none">KIDS</div>
                    <div className="text-[#1D3557] font-black text-xs md:text-sm leading-none">UNIVERSITY</div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xl md:text-2xl font-black tracking-tight">
                  <span className="text-[#E63946]">KIDS</span>
                  <span className="text-gray-700">-</span>
                  <span className="text-[#1D3557]">U</span>
                </span>
                <span className="text-xs md:text-sm text-gray-600 font-medium">Improving Lives Through Education</span>
              </div>
            </Link>

            {/* Main navigation links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-[#1D3557] font-bold text-base md:text-lg hover:text-[#E63946] transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    {item.items.length > 0 && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Dropdown */}
                  {openDropdown === item.label && item.items.length > 0 && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-6 py-3 text-gray-700 hover:bg-[#FFF5F5] hover:text-[#E63946] transition-colors font-medium"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button className="lg:hidden text-[#006B8F]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

