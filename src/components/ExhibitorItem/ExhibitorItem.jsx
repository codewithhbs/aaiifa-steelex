import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ExhibitorItem = ({ title, children }) => {
  const [open, setOpen] = useState(
    title === "Metal Manufacturers and Suppliers"
  );

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left font-semibold"
      >
        <span className="flex items-center gap-3">
          <span className="w-1.5 h-6 bg-green-500 rounded"></span>
          {title}
        </span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>

      {open && (
        <ul className="mt-4 ml-6 text-sm text-gray-600 list-disc space-y-1">
          {children}
        </ul>
      )}
    </div>
  );
};

const Ecosystem = () => {
  return (
    <section
      id="highlights"
      className="bg-linear-to-b from-[#0b1220] to-[#070b15] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            CONNECTING THE ENTIRE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-green-500 mt-2">
            STEEL ECOSYSTEM
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Bringing together industry leaders, innovators, and key stakeholders
            under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Exhibitor */}
          <div className="bg-white text-black rounded-2xl shadow-lg p-8">
            <h4 className="text-xl font-bold mb-6 border-b pb-3">
              EXHIBITOR PROFILE
            </h4>

            <div className="space-y-5">
              <ExhibitorItem title="Metal Manufacturers and Suppliers">
                <li>Steel and Steel Structures</li>
                <li>Stainless Steel</li>
                <li>TMT Bars Re-rolling</li>
                <li>Steel Wire</li>
              </ExhibitorItem>

              <ExhibitorItem title="Project Management & Consultation">
                <li>Refractories</li>
                <li>Scrap Collecting and Recycling</li>
                <li>Leading Consultant(Financial & Technical)</li>
              </ExhibitorItem>
              <ExhibitorItem title="Material Handling Solutions">
                <li>Cranes & Lifting Equipment</li>
                <li>Industrial Truck, Froklifts & Accessories</li>
                <li>Loading & Unloading Equipment</li>
                <li>Rebotics System & Automation</li>
                <li>Health & Safety Management</li>
              </ExhibitorItem>
              <ExhibitorItem title="Environment Management">
                <li>Pollution Controlling Equipment</li>
              </ExhibitorItem>
              <ExhibitorItem title="Leading Scientific Research & Development Institutions">
                <li>Skill Development Institutions</li>
              </ExhibitorItem>
              <ExhibitorItem title="Machinery & Technology for Steel & Metal Manufacturing">
                <li>Foundry Machinery & Technology</li>
                <li>Rolling Mill Equipment</li>
                <li>Automation & Instrumentation</li>
                <li>Energy Conservation</li>
                <li>Engineering and Design</li>
                <li>Pelletisation</li>
                <li>Lubrication & Bearings</li>
              </ExhibitorItem>
            </div>
          </div>

          {/* Visitor */}
          <div className="bg-white text-black rounded-2xl shadow-lg p-8 border-t-4 border-green-500">
            <h4 className="text-xl font-bold mb-6 border-b pb-3">
              VISITOR PROFILE
            </h4>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
              {[
                "Hardware, Sanitary ware, Bath Fitting",
                "Heavy Machinery Manufacturers",
                "Architecture, Building & Construction",
                "Product Development Professionals",
                "Consultants & Service providers",
                "Public Sector Enterprises",
                "OEMs",
                "Automotive",
                "Spare parts, Body parts",
                "Railway & Transport",
                "Ship Builder & Ship Repair Industries",
                "Electrical & Electronics Companies",
                "Consumer Appliances",
                "Storage & Tank Manufacturers",
                "Machinery Manufacturers, Fabricators",
                "Chemical Industries",
                "Offshore Applications",
                "Power Transmission",
                "Rolling Mills",
                "Water Supplier Industry",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1 h-5 bg-green-500 rounded mt-1"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
