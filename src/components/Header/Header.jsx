import React, { useState } from "react";
import logo from "./aaiifa-white-logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [steelexOpen, setSteelexOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(null);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="AIIFA" className="h-17 object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium text-gray-800">
            <a href="/" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#highlights" className="hover:text-blue-600 transition">
              Highlights
            </a>
            <a
              href="#industry-insights"
              className="hover:text-blue-600 transition"
            >
              Industry Insights
            </a>
            <a href="#network" className="hover:text-blue-600 transition">
              Network
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>

            {/* ================= STEELEX DROPDOWN ================= */}
            <div
              className="relative"
              onMouseEnter={() => setSteelexOpen(true)}
              onMouseLeave={() => {
                setSteelexOpen(false);
                setYearOpen(null);
              }}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition">
                STEELEX Showcase
                <span
                  className={`transition-transform duration-300 ${
                    steelexOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {/* Main Dropdown */}
              <div
                className={`absolute left-0 xl:left-auto xl:right-0 top-full pt-4 transition-all duration-300 ${
                  steelexOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="min-w-[220px] max-w-[90vw] rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border py-3">
                  {/* 2025 */}
                  <div
                    className="relative"
                    onMouseEnter={() => setYearOpen("2025")}
                  >
                    <div className="px-5 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
                      2025 <span>›</span>
                    </div>

                    {/* Submenu */}
                    <div
                      className={`absolute top-0 left-[96%] ml-2 transition-all duration-300 ${
                        yearOpen === "2025"
                          ? "opacity-100 visible translate-x-0"
                          : "opacity-0 invisible -translate-x-2"
                      }`}
                    >
                      <div className="w-48 rounded-2xl bg-white shadow-2xl border py-3">
                        <a
                          href="/aiifa-exhibitors"
                          className="block px-5 py-2 hover:bg-gray-100"
                        >
                          Exhibitors
                        </a>
                        <a
                          href="/aiifa-roadshow"
                          className="block px-5 py-2 hover:bg-gray-100"
                        >
                          Roadshow
                        </a>
                        <a
                          href="/aiifa-layout"
                          className="block px-5 py-2 hover:bg-gray-100"
                        >
                          Layout
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 2024 */}
                  <div
                    className="relative"
                    onMouseEnter={() => setYearOpen("2024")}
                  >
                    <div className="px-5 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center">
                      2024 <span>›</span>
                    </div>

                    <div
                      className={`absolute top-0 left-[96%] ml-2 transition-all duration-300 ${
                        yearOpen === "2024"
                          ? "opacity-100 visible translate-x-0"
                          : "opacity-0 invisible -translate-x-2"
                      }`}
                    >
                      <div className="w-48 rounded-2xl bg-white shadow-2xl border py-3">
                        <a
                          href="#"
                          className="block px-5 py-2 hover:bg-gray-100"
                        >
                          Exhibitors
                        </a>
                        <a
                          href="#"
                          className="block px-5 py-2 hover:bg-gray-100"
                        >
                          Roadshow
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 2023 */}
                  <div className="px-5 py-2 text-gray-400 cursor-default">
                    2023
                  </div>
                </div>
              </div>
            </div>

            {/* ================= REGISTER DROPDOWN ================= */}
            <div
              className="relative"
              onMouseEnter={() => setRegisterOpen(true)}
              onMouseLeave={() => setRegisterOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition">
                Register Now
                <span
                  className={`transition-transform duration-300 ${
                    registerOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              <div
                className={`absolute left-0 xl:left-auto xl:right-0 top-full pt-4 transition-all duration-300 ${
                  registerOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="min-w-[220px] rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border py-3">
                  <a
                    href="/aiifa-exhibitor"
                    className="block px-5 py-2 hover:bg-gray-100"
                  >
                    AIIFA Exhibitor
                  </a>

                  <a
                    href="/aiifa-visitors"
                    className="block px-5 py-2 hover:bg-gray-100"
                  >
                    AIIFA Visitors
                  </a>

                  <a
                    href="/aiifa-delegate"
                    className="block px-5 py-2 hover:bg-gray-100"
                  >
                    AIIFA Delegate
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <nav className="px-6 py-6 space-y-4 text-[15px] font-medium text-gray-800">
            {/* Main Links */}
            <a href="/" className="block py-2 border-b">
              Home
            </a>
            <a href="#highlights" className="block py-2 border-b">
              Highlights
            </a>
            <a href="#industry-insights" className="block py-2 border-b">
              Industry Insights
            </a>
            <a href="#network" className="block py-2 border-b">
              Network
            </a>
            <a href="#about" className="block py-2 border-b">
              About
            </a>
            <a href="#contact" className="block py-2 border-b">
              Contact
            </a>

            {/* ================= STEELEX ================= */}
            <details className="group border-b pb-2">
              <summary className="flex justify-between items-center cursor-pointer py-2">
                STEELEX Showcase
                <span className="transition group-open:rotate-180">▾</span>
              </summary>

              <div className="ml-3 mt-2 space-y-3">
                {/* 2025 */}
                <details className="group">
                  <summary className="flex justify-between cursor-pointer py-1">
                    2025
                    <span className="transition group-open:rotate-90">›</span>
                  </summary>

                  <div className="ml-4 mt-2 space-y-2 text-gray-600">
                    <a href="/aiifa-exhibitors" className="block">
                      Exhibitors
                    </a>
                    <a href="/aiifa-roadshow" className="block">
                      Roadshow
                    </a>
                    <a href="/aiifa-layout" className="block">
                      Layout
                    </a>
                  </div>
                </details>

                {/* 2024 */}
                <details className="group">
                  <summary className="flex justify-between cursor-pointer py-1">
                    2024
                    <span className="transition group-open:rotate-90">›</span>
                  </summary>

                  <div className="ml-4 mt-2 space-y-2 text-gray-600">
                    <a href="#">Exhibitors</a>
                    <a href="#">Roadshow</a>
                  </div>
                </details>

                {/* 2023 */}
                <div className="text-gray-400 py-1">2023</div>
              </div>
            </details>

            {/* ================= REGISTER ================= */}
            <details className="group border-b pb-2">
              <summary className="flex justify-between items-center cursor-pointer py-2">
                Register Now
                <span className="transition group-open:rotate-180">▾</span>
              </summary>

              <div className="ml-3 mt-2 space-y-2 text-gray-600">
                <a href="/aiifa-exhibitor" className="block">
                  AIIFA Exhibitor
                </a>
                <a href="/aiifa-visitors" className="block">
                  AIIFA Visitors
                </a>
                <a href="/aiifa-delegate" className="block">
                  AIIFA Delegate
                </a>
              </div>
            </details>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
