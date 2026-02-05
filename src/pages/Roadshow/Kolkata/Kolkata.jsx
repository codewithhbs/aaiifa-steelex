import React, { useEffect } from "react";

// Ahmedabad Roadshow gallery (online images)
const kolkata = [
  {
    id: 1,
    name: "Kolkata Roadshow - 20 Augest 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770285021/WhatsApp_Image_2025-08-17_at_8.56.09_PM_m1ozcy.jpg",
  },
  {
    id: 2,
    name: "Kolkata Roadshow - 20 Augest 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770285048/WhatsApp_Image_2025-08-20_at_2.34.43_PM_u3pij2.jpg",
  },
  {
    id: 3,
    name: "Kolkata Roadshow - 20 Augest 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770286575/WhatsApp_Image_2025-08-20_at_2.34.44_PM_1_sgwp9b.jpg",
  },
  {
    id: 4,
    name: "Kolkata Roadshow - 20 Augest 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770286603/WhatsApp_Image_2025-08-20_at_2.34.45_PM_egekoy.jpg",
  },
  {
    id: 5,
    name: "Kolkata Roadshow - 20 Augest 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770286627/WhatsApp_Image_2025-08-20_at_2.34.44_PM_qz530q.jpg",
  },
  {
    id: 6,
    name: "Kolkata Roadshow - 20 Augest 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770286646/WhatsApp_Image_2025-08-20_at_2.34.45_PM_1_s7kxjs.jpg",
  },
];

const Kolkata = () => {
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
            Kolkata Roadshow
          </h2>
          <p className="mt-2 text-gray-600 font-medium">
            20 Augest 2025 · Kolkata
          </p>
          {/* <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The Ahmedabad Roadshow 2025 brought together leading industrial
            companies, manufacturers, and solution providers on a single
            platform. The event focused on innovation, networking, and
            showcasing advanced technologies, creating meaningful engagement
            between exhibitors and industry professionals.
          </p> */}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {kolkata.map((item) => (
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

export default Kolkata;
