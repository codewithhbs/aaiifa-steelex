import React from "react";
import logo from "../../assets/image/logo.webp"; // top logo
import kp1 from "../../assets/image/t1.webp";
import kp2 from "../../assets/image/t2.webp";

import sa1 from "../../assets/image/logo-1.jpg";
import sa2 from "../../assets/image/logo-2.jpg";
import sa3 from "../../assets/image/logo-3.jpg";
import sa4 from "../../assets/image/logo-4.jpg";
import sa5 from "../../assets/image/logo-5.jpg";
import sa6 from "../../assets/image/logo-6.jpg";
import sa7 from "../../assets/image/logo-7.jpg";
import sa8 from "../../assets/image/logo-8.jpg";
import sa9 from "../../assets/image/logo-9.jpg";
import sa10 from "../../assets/image/logo-10.jpg";
import sa11 from "../../assets/image/logo-11.jpg";
import sa12 from "../../assets/image/logo-12.jpg";
import sa13 from "../../assets/image/logo-13.jpg";
import sa14 from "../../assets/image/logo-14.jpg";

const AutoScrollRow = ({ logos }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center gap-10 whitespace-nowrap animate-scroll">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-6 min-w-45 flex items-center justify-center"
          >
            <img
              src={logo}
              className="h-14 object-contain hover:grayscale-0 transition"
              alt="association"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const AiifaInviteeDelegate = () => {
  return (
    <section className="bg-[#eef6ee] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Card */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mt-10">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Logo + Info */}
            <div>
              <img
                src={logo}
                alt="Steel Mahakumbh"
                className="h-28 object-contain"
              />
            </div>

            {/* Price Cards */}
            <div className="flex gap-6 flex-wrap">
              {/* With Stay */}
              <div className="bg-white rounded-xl shadow-md w-62">
                <div className="bg-teal-600 text-white text-center py-3 rounded-t-xl font-semibold">
                  With 5-Star Stay
                </div>
                <div className="p-5 text-center">
                  <p className="text-lg font-semibold text-teal-600">
                    ₹30,000 + 18% GST =
                  </p>
                  <p className="text-xl font-bold text-teal-700 mt-1">
                    ₹35,400/-
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Includes 2-night stay in a 5-star hotel
                  </p>
                </div>
              </div>

              {/* Without Stay */}
              <div className="bg-white rounded-xl shadow-md w-62">
                <div className="bg-slate-800 text-white text-center py-3 rounded-t-xl font-semibold">
                  Without Stay
                </div>
                <div className="p-5 text-center">
                  <p className="text-lg font-semibold text-teal-600">
                    ₹10,000 + 18% GST =
                  </p>
                  <p className="text-xl font-bold text-teal-700 mt-1">
                    ₹11,800/-
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Payment without hotel accommodation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM PLACEHOLDER */}
          <div className="bg-white rounded-2xl shadow-md min-h-[420px] flex items-start justify-center p-8">
            <h2 className="text-xl font-bold text-center">
              AIIFA DELEGATE INVITEE <br /> APPLICATION
            </h2>
          </div>
        </div>

        {/* Knowledge Partners */}
        <div className="mt-24">
          <h2 className="section-title">Knowledge Partners</h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto mt-10">
            {[kp1, kp2].map((logo, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-8 flex items-center justify-center hover:shadow-md transition"
              >
                <img src={logo} className="h-20 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Supported Associations */}
        <div className="mt-28">
          <h2 className="section-title">Supported Associations</h2>

          <div className="mt-10">
            <AutoScrollRow
              logos={[
                sa1,
                sa2,
                sa3,
                sa4,
                sa5,
                sa6,
                sa7,
                sa8,
                sa9,
                sa10,
                sa11,
                sa12,
                sa13,
                sa14,
              ]}
            />
          </div>
        </div>
      </div>

      {/* Local styles */}
      <style>
        {`
  .section-title {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .animate-scroll {
    animation: scroll 25s linear infinite;
  }
`}
      </style>
    </section>
  );
};

export default AiifaInviteeDelegate;
