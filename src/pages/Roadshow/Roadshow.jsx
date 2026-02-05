import React from "react";
import { useNavigate } from "react-router-dom";

const roadshows = [
  {
    id: 1,
    title: "Ahmedabad Roadshow",
    date: "02-09-2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287955/360_F_914860213_VnHqUj18TS00T1WJQFFD2WK0qlcD66YE_izmosx.jpg",
    slug: "/roadshow/ahmedabad",
  },
  {
    id: 2,
    title: "Hyderabad Roadshow",
    date: "31-07-2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287915/jpg_yey1zj.avif",
    slug: "/roadshow/hyderabad",
  },
  {
    id: 3,
    title: "Jalna Roadshow",
    date: "30-05-2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770288023/kali-masjid_cfksro.jpg",
    slug: "/roadshow/jalna",
  },
  {
    id: 4,
    title: "Kolkata Roadshow",
    date: "19-08-2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287851/photo-1570168007204-dfb528c6958f_nriyev.avif",
    slug: "/roadshow/kolkata",
  },
  {
    id: 5,
    title: "Raipur Roadshow",
    date: "22-07-2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287793/Naya_Raipur__Sector_19_dttjei.png",
    slug: "/roadshow/raipur",
  },
];

const Roadshow = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#EEF6EE] py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Roadshows
          </h2>
          <p className="mt-3 text-gray-500">
            Explore our roadshows held across different cities
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {roadshows.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(item.slug)}
              className="cursor-pointer rounded-2xl border border-gray-200 overflow-hidden bg-gray-50 hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="aspect-4/3 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{item.date}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadshow;
