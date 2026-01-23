import React from "react";
import logo from "../../../public/image/logo.webp"; // top logo
import kp1 from "../../../public/image/t1.webp";
import kp2 from "../../../public/image/t2.webp";

import sa1 from "../../../public/image/logo-1.jpg";
import sa2 from "../../../public/image/logo-2.jpg";
import sa3 from "../../../public/image/logo-3.jpg";
import sa4 from "../../../public/image/logo-4.jpg";
import sa5 from "../../../public/image/logo-5.jpg";
import sa6 from "../../../public/image/logo-6.jpg";
import sa7 from "../../../public/image/logo-7.jpg";
import sa8 from "../../../public/image/logo-8.jpg";
import sa9 from "../../../public/image/logo-9.jpg";
import sa10 from "../../../public/image/logo-10.jpg";
import sa11 from "../../../public/image/logo-11.jpg";
import sa12 from "../../../public/image/logo-12.jpg";
import sa13 from "../../../public/image/logo-13.jpg";
import sa14 from "../../../public/image/logo-14.jpg";
import qr from '../../../public/image/qr.webp'

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

const AiifaAdvertisementForm = () => {
  return (
    <section className="bg-[#eef6ee] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Card */}
        <div className="mt-10">
          {/* Top Logo */}
          <div className="flex justify-center mb-10">
            <img
              src={logo}
              alt="Steel Mahakumbh"
              className="h-28 object-contain"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT : BANK DETAILS */}
            <div>
              <h3 className="font-semibold mb-4">BANK DETAILS</h3>

              <div className="text-sm text-gray-700 leading-relaxed mb-6">
                <p>
                  <strong>Yes Bank Ltd.</strong>
                </p>
                <p>AIIFA SUSTAINABLE STEEL MANUFACTURERS ASSOCIATION</p>
                <p>Branch: D-Mall, Netaji Subhash Place, Delhi-110034</p>
                <p>A/c No: 01849640000338</p>
                <p>IFSC: YESB0000184</p>
              </div>

              {/* QR */}
              <div className="bg-white w-48 p-4 rounded-lg shadow-md">
                <img
                  src={qr}
                  alt="QR Code"
                  className="w-full"
                />
                <p className="text-xs text-center mt-2 text-gray-600">
                  AIIFA Sustainable Steel Manufacturers Association
                </p>
              </div>
            </div>

            {/* RIGHT : FORM PLACEHOLDER */}
            <div className="bg-white rounded-2xl shadow-md min-h-[420px] p-8 flex items-start justify-center">
              <h2 className="text-xl font-bold text-center">
                AIIFA ADVERTISEMENT FORM – 2025
              </h2>
            </div>
          </div>

          {/* Advertisement Tariff */}
          <div className="mt-20 max-w-8xl mx-auto">
            <h3 className="text-center font-semibold mb-6">
              ADVERTISEMENT TARIFF
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="border px-3 py-2 text-left">S.No.</th>
                    <th className="border px-3 py-2 text-left">Particulars</th>
                    <th className="border px-3 py-2 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border px-3 py-2">1.</td>
                    <td className="border px-3 py-2">Front Back Cover</td>
                    <td className="border px-3 py-2">INR 3 Lac</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">2.</td>
                    <td className="border px-3 py-2">Front Facing Inside</td>
                    <td className="border px-3 py-2">INR 3.5 Lac</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">3.</td>
                    <td className="border px-3 py-2">Back Cover</td>
                    <td className="border px-3 py-2">INR 4 Lac</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">4.</td>
                    <td className="border px-3 py-2">Back Inside Cover</td>
                    <td className="border px-3 py-2">INR 3.5 Lac</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">5.</td>
                    <td className="border px-3 py-2">Back Inside Facing</td>
                    <td className="border px-3 py-2">INR 3 Lac</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">6.</td>
                    <td className="border px-3 py-2">Full Page</td>
                    <td className="border px-3 py-2">INR 2 Lac</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-center mt-4 text-gray-600">
              Size: 28 x 22 CM Print Area (Full Page) 24 x 18 CM
            </p>
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

export default AiifaAdvertisementForm;
