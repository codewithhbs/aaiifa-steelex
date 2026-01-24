import React from "react";
import i1 from "./legacy1.png";
import i2 from "./legacy2.png";
import i3 from "./legacy3.png";
import i4 from "./legacy4.png";

const images = [
  i1,
  i2,
  i3,
  i4,
];

const Legacy = () => {
  return (
    <section className="bg-[#f4f4f4] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            OUR LEGACY
          </h2>
          <p className="text-gray-700 mt-2 text-lg">
            Highlights from Previous events
          </p>
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img}
                alt="AIIFA Event"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Legacy;
