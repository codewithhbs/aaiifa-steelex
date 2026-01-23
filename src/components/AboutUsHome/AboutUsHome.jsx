import React from "react";
import { Users, MapPin, Flag, Award } from "lucide-react";

const AboutUsHome = () => {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">ABOUT US</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Strengthening India’s steel manufacturing ecosystem through
            sustainability, policy, and innovation.
          </p>
        </div>

        {/* Top content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div className="text-gray-700 leading-relaxed">
            <p>
              <strong>AIIFA Sustainable Steel Manufacturers Association</strong>{" "}
              is a national industry body representing over 1,800 members across
              India’s secondary steel sector. Headquartered in New Delhi with 12
              regional chapters, AIIFA works closely with industry stakeholders
              and government institutions to promote sustainable, competitive,
              and future-ready steel manufacturing.
            </p>
          </div>

          {/* Right highlight box */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
            <h4 className="font-semibold mb-4">
              AIIFA acts as a bridge between industry, policy, and innovation.
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                Advocating practical, growth-oriented policies
              </li>
              <li className="flex gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                Enabling adoption of advanced steel technologies
              </li>
              <li className="flex gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                Supporting low-carbon and efficient manufacturing practices
              </li>
            </ul>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="flex items-center gap-4">
            <Users className="text-green-500 w-8 h-8" />
            <div>
              <h4 className="font-bold">1800+</h4>
              <p className="text-sm text-gray-600">Associated Members</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-green-500 w-8 h-8" />
            <div>
              <h4 className="font-bold">12</h4>
              <p className="text-sm text-gray-600">Regional Chapters</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Flag className="text-green-500 w-8 h-8" />
            <div>
              <h4 className="font-bold">National Level</h4>
              <p className="text-sm text-gray-600">Policy Engagement</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Award className="text-green-500 w-8 h-8" />
            <div>
              <h4 className="font-bold">Flagship</h4>
              <p className="text-sm text-gray-600">
                Conferences & Exhibitions
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-linear-to-r from-[#020617] to-[#020617] text-white rounded-2xl p-8 text-center">
          <p className="max-w-4xl mx-auto text-gray-300">
            Aligned with India’s vision of achieving{" "}
            <span className="text-green-400 font-semibold">
              300 million tonnes
            </span>{" "}
            of steel capacity by 2030, AIIFA continues to drive collaboration,
            innovation, and sustainable growth across the sector.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUsHome;
