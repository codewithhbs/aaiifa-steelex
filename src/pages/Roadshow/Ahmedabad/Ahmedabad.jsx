import React, { useEffect } from "react";

// Ahmedabad Roadshow gallery (online images)
const ahmedabad = [
  {
    id: 1,
    name: "Ahmedabad Roadshow - 02 September 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770186556/Ahmedabad_Roadshow_02-09-2025_xvm9xe.jpg",
  },
  {
    id: 2,
    name: "Ahmedabad Roadshow - 02 September 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770186573/WhatsApp_Image_2025-09-04_at_4.19.49_PM_lhoo8g.jpg",
  },
  {
    id: 3,
    name: "Ahmedabad Roadshow - 02 September 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770186578/WhatsApp_Image_2025-09-04_at_4.19.50_PM_1_q2seit.jpg",
  },
  {
    id: 4,
    name: "Ahmedabad Roadshow - 02 September 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770186601/WhatsApp_Image_2025-09-04_at_4.19.50_PM_mknww5.jpg",
  },
  {
    id: 5,
    name: "Ahmedabad Roadshow - 02 September 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770186619/WhatsApp_Image_2025-09-04_at_4.56.37_PM_wxholt.jpg",
  },
];

const Ahmedabad = () => {
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
            Ahmedabad Roadshow
          </h2>
          <p className="mt-2 text-gray-600 font-medium">
            02 September 2025 · Ahmedabad
          </p>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The Ahmedabad Roadshow 2025 brought together leading industrial
            companies, manufacturers, and solution providers on a single
            platform. The event focused on innovation, networking, and
            showcasing advanced technologies, creating meaningful engagement
            between exhibitors and industry professionals.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ahmedabad.map((item) => (
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

export default Ahmedabad;
