import React from "react";
import {
  AlertTriangle,
  Leaf,
  Recycle,
  Zap,
  Cpu,
  Target,
} from "lucide-react";

const Industry = () => {
  return (
    <section id="industry-insights" className="bg-linear-to-b from-[#0b1220] to-[#070b15] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            INDIA’S STEEL INDUSTRY
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-green-500 mt-2">
            A PILLAR OF GROWTH
          </h3>
        </div>

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Text */}
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              The Indian Steel Industry is a vital pillar of the nation’s
              economic development. At its core lies the Secondary Steel
              Sector, playing a central role in driving inclusive and
              decentralised growth.
            </p>
            <p>
              Typically spread across semi-urban and rural regions, these
              units foster entrepreneurship and ensure steel availability
              for both massive infrastructure projects and small-scale
              industries. Their adaptability and cost-effectiveness are
              crucial to India's future.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
              <h4 className="text-3xl font-bold text-green-500">60%</h4>
              <p className="text-sm text-gray-400 mt-2">
                Contribution to India’s total steel production
              </p>
              <p className="text-xs text-green-400 mt-1">SECONDARY SECTOR</p>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
              <h4 className="text-3xl font-bold text-green-500">300</h4>
              <p className="text-sm text-gray-400 mt-2">
                National production capacity target by 2030
              </p>
              <p className="text-xs text-green-400 mt-1">MILLION TONNES</p>
            </div>
          </div>
        </div>

        {/* Challenges & Opportunities */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10">
            <h4 className="flex items-center gap-3 text-lg font-semibold mb-6">
              <AlertTriangle className="text-orange-500" />
              Critical Challenges
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>• Raw Material Volatility</li>
              <li>• High Energy & Logistics Costs</li>
              <li>• Infrastructure Gaps</li>
              <li>• Decarbonization Pressures</li>
              <li>• EU Carbon Border Mechanism (CBAM)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-green-800/10 p-8 rounded-2xl border border-green-500/30">
            <h4 className="flex items-center gap-3 text-lg font-semibold mb-6">
              <Leaf className="text-green-400" />
              Future Opportunities
            </h4>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li>• Green Steel Transition</li>
              <li>• Circular Economy Practices</li>
              <li>• Hydrogen-based DRI</li>
              <li>• EIF Technology Adoption</li>
              <li>• Sustainable Growth & Net Zero</li>
            </ul>
          </div>

        </div>

        {/* Key Sectors */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            KEY SECTORS
          </h3>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                title: "Metal Production & Raw Material",
                items: [
                  "Iron and steel making",
                  "Pellet & Sponge Iron",
                  "Metal Productions",
                  "Raw Material",
                  "Ferrous & Non Ferrous",
                  "Furnace",
                  "Ferro-Alloy",
                  "Foundry",
                ],
              },
              {
                title: "Shaping, Milling & Finishing",
                items: [
                  "Rolling Mills",
                  "Forging",
                  "Tubes & Pipes",
                  "Wires & Cables",
                  "Heat Treatment",
                  "Rollers",
                  "Metal Shaping & Finishing",
                  "Bearings",
                ],
              },
              {
                title: "Engineering, Machinery & Parts",
                items: [
                  "Metal Engineering",
                  "Gears",
                  "Pumps & Valves",
                  "Machine Tool",
                  "Process Control",
                  "Instrumentation",
                  "Plant Machinery & Equipment",
                ],
              },
              {
                title: "Future Tech & Sustainability",
                items: [
                  "Automation Technologies",
                  "Green Energy",
                  "Metal & Scrap Recycling",
                  "Testing, Measurements & Instrumentation",
                ],
              },
            ].map((sector, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10"
              >
                <h4 className="text-green-400 font-semibold mb-4">
                  {sector.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {sector.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Industry;
