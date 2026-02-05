import React, { useEffect } from "react";

// Raipur Roadshow gallery (online images)
const raipur = [
  {
    id: 1,
    name: "Raipur Roadshow - 23 July 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287068/WELCOME_FLYER_d2gqjr.jpg",
  },
  {
    id: 2,
    name: "Raipur Roadshow - 23 July 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287124/WhatsApp_Image_2025-07-23_at_4.42.45_PM_mht2po.jpg",
  },
  {
    id: 3,
    name: "Raipur Roadshow - 23 July 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287235/WhatsApp_Image_2025-07-23_at_6.37.50_PM_qpjyxb.jpg",
  },
  {
    id: 4,
    name: "Raipur Roadshow - 26 July 0625",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287257/WhatsApp_Image_2025-07-26_at_2.50.19_PM_1_zkxahh.jpg",
  },
  {
    id: 5,
    name: "Raipur Roadshow - 26 July 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287320/WhatsApp_Image_2025-07-26_at_2.50.19_PM_xtf08k.jpg",
  },
  {
    id: 6,
    name: "Raipur Roadshow - 26 July 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287387/WhatsApp_Image_2025-07-26_at_3.12.28_PM_a4rkv8.jpg",
  },
  {
    id: 7,
    name: "Raipur Roadshow - 26 July 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770287459/WhatsApp_Image_2025-07-26_at_3.12.29_PM_bl9cpq.jpg",
  },
];

const Raipur = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
    return (
      <section className="bg-[#EEF6EE] py-14 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Raipur Roadshow
            </h2>
            <p className="mt-2 text-gray-600 font-medium">
              23 July - 28 July 2025 · Raipur
            </p>
            {/* <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
              The Raipur Roadshow 2025 brought together leading industrial
              companies, manufacturers, and solution providers on a single
              platform. The event focused on innovation, networking, and
              showcasing advanced technologies, creating meaningful engagement
              between exhibitors and industry professionals.
            </p> */}
          </div>
  
          {/* Gallery Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {raipur.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden relative shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div
                  className={`${
                    item.orientation === "portrait" ? "aspect-3/4" : "aspect-4/3"
                  } bg-white`}
                >
                  <a href={item.image} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-6"
                    />
                  </a>
                </div>
  
                {/* Content */}
                <div className="px-6 pb-4 pt-2">
                  <h3 className="text-base font-semibold text-gray-800 leading-snug">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Raipur;
