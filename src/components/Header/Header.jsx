import React, { useState } from "react";
import logo from "./aaiifa-white-logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [steelexOpen, setSteelexOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center h-full">
            <img
              src={logo}
              alt="AIIFA Logo"
              className="h-full object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            {/* <a href="#conference" className="hover:text-blue-600">
              Conference
            </a> */}
            <a href="#highlights" className="hover:text-blue-600">
              Highlights
            </a>
            <a href="#industry-insights" className="hover:text-blue-600">
              Industry Insights
            </a>
            <a href="#network" className="hover:text-blue-600">
              Network
            </a>
            <a href="#about" className="hover:text-blue-600">
              About Us
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>

            {/* STEELEX  2025 Showcase Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSteelexOpen(!steelexOpen)}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                STEELEX 2025 Showcase ▾
              </button>

              {steelexOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white border shadow-lg rounded-md py-2 z-50">
                  <a
                    href="/aiifa-exhibitors"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Exhibitors 2025
                  </a>
                  <a
                    href=""
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Roadshow 2025
                  </a>
                  <a
                    href=""
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Layout 2025
                  </a>
                </div>
              )}
            </div>

            {/* Register Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRegisterOpen(!registerOpen)}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                Register Now ▾
              </button>

              {registerOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white border shadow-lg rounded-md py-2 z-50">
                  <a
                    href="/aiifa-exhibitor"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    AIIFA Exhibitor
                  </a>
                  <a
                    href="/aiifa-visitors"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    AIIFA Visitors
                  </a>
                  <a
                    href="/aiifa-invitee-delegate"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    AIIFA Invitee Delegate
                  </a>
                  <a
                    href="/aiifa-delegate"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    AIIFA Delegate
                  </a>
                  <a
                    href="/aiifa-advertisement-form"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    AIIFA Advertisement Form
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 text-2xl"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <a href="/" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#conference" onClick={() => setOpen(false)}>
              Conference
            </a>
            <a href="#highlights" onClick={() => setOpen(false)}>
              Highlights
            </a>
            <a href="#industry-insights" onClick={() => setOpen(false)}>
              Industry Insights
            </a>
            <a href="#network" onClick={() => setOpen(false)}>
              Network
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              About Us
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

            {/* Mobile Register Dropdown */}
            <details className="cursor-pointer">
              <summary className="list-none font-medium">Register Now</summary>
              <div className="mt-2 ml-4 flex flex-col gap-2">
                <a href="/aiifa-exhibitor" onClick={() => setOpen(false)}>
                  AIIFA Exhibitor
                </a>
                <a href="/aiifa-visitors" onClick={() => setOpen(false)}>
                  AIIFA Visitors
                </a>
                <a
                  href="/aiifa-invitee-delegate"
                  onClick={() => setOpen(false)}
                >
                  AIIFA Invitee Delegate
                </a>
                <a href="/aiifa-delegate" onClick={() => setOpen(false)}>
                  AIIFA Delegate
                </a>
                <a
                  href="/aiifa-advertisement-form"
                  onClick={() => setOpen(false)}
                >
                  AIIFA Advertisement Form
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
