import React from "react";

const UpcomingEvent = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-white min-h-screen py-16 px-4">

      <div className="max-w-6xl mx-auto">

        {/* 🔷 Logo + Company Name */}
        <div className="flex flex-col items-center text-center mb-10">
          <img
            src="https://res.cloudinary.com/duxsqzrot/image/upload/v1770715162/aaiifa-white-logo_xtbzy4.png"   // 👉 yaha apna logo path lagao
            alt="AIIFA SteelEx"
            className=" h-auto mb-4"
          />
          {/* <h2 className="text-2xl font-semibold text-gray-700">
            AIIFA SteelEx
          </h2> */}
        </div>

        {/* 🔷 Main Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-100">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 leading-snug">
            Green Steel Pavilion for the Indian Secondary Steel Sector
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 mt-4 text-lg">
            AIIFA Cordially Invites you to be part of this landmark initiative
          </p>

          {/* Date + Venue */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              📅 16–17 April 2026
            </span>

            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
              📍 Pavilion- C 13 | Bharat Mandapam, New Delhi
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-center mt-8 leading-relaxed max-w-3xl mx-auto">
            Join a landmark national platform dedicated to advancing India’s
            transition toward low-carbon and sustainable steel manufacturing.
            Present your organization’s capabilities alongside leading producers,
            policymakers, technology innovators, and global buyers.
          </p>

          {/* Why Participate */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Why Participate?
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Showcase Leadership in green steel, decarbonization, and energy-efficient manufacturing",
                "Engage Global Markets by connecting with buyers, investors, and technology partners",
                "Collaborate with Policymakers on India’s Net Zero and sustainable growth roadmap",
                "Prepare for the Future with insights on CBAM compliance and green financing opportunities",
                "Enhance Brand Visibility within the national and international steel ecosystem",
                // "Be a catalyst in shaping a cleaner, resilient, and globally competitive Indian steel industry",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <p className="text-gray-700 font-medium leading-relaxed">
                    ✅ {item}
                  </p>
                </div>
              ))}

            </div>

            <h4 className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium mt-5 text-center">Be a catalyst in shaping a cleaner, resilient, and globally competitive Indian steel industry</h4>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
