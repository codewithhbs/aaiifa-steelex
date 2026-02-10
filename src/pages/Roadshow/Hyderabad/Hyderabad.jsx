import React, { useEffect } from "react";

const hyderabad = [
  {
    id: 1,
    name: "Hyderabad Roadshow - 29 July 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276571/WhatsApp_Image_2025-07-29_at_1.46.52_PM_dhyx8c.jpg",
  },
  {
    id: 1,
    name: "Hyderabad Roadshow - 01 August 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276014/WhatsApp_Image_2025-08-01_at_4.24.57_PM_1_vx1bwv.jpg",
  },
  {
    id: 2,
    name: "Hyderabad Roadshow - 01 August 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276042/WhatsApp_Image_2025-08-01_at_4.24.57_PM_lwcaej.jpg",
  },
  {
    id: 3,
    name: "Hyderabad Roadshow - 01 August 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276048/WhatsApp_Image_2025-08-01_at_4.24.58_PM_fdk6ft.jpg",
  },
  {
    id: 4,
    name: "Hyderabad Roadshow - 01 August 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276069/WhatsApp_Image_2025-08-01_at_7.11.19_PM_1_hjnr9l.jpg",
  },
  {
    id: 5,
    name: "Hyderabad Roadshow - 01 August 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276078/WhatsApp_Image_2025-08-01_at_7.11.19_PM_qqheam.jpg",
  },
  {
    id: 6,
    name: "Hyderabad Roadshow - 01 August 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276101/WhatsApp_Image_2025-08-01_at_7.11.20_PM_1_cdbl60.jpg",
  },
  {
    id: 7,
    name: "Hyderabad Roadshow - 01 August 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276174/WhatsApp_Image_2025-08-01_at_7.11.20_PM_b4r188.jpg",
  },
  {
    id: 8,
    name: "Hyderabad Roadshow - 01 August 2025",
    image:
      "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276204/WhatsApp_Image_2025-08-01_at_7.11.21_PM_1_wvz8st.jpg",
  },
];

const pdfs = [
  {
    id: 1,
    title: "Hyderabad Road Show Event Brochure",
    url: "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276740/_Hyderabad_Road_Show_Event_Brochure__mubqb2.pdf",
  },
  {
    id: 2,
    title: "State Visit Flyer – AIIFA Hyderabad",
    url: "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770276746/State_Visit_Flyer_AIIFA-_Hyderbad_zh7xnv.pdf",
  },
];

const Hyderabad = () => {
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
            Hyderabad Roadshow 2025
          </h2>

          <p className="mt-2 text-gray-600 font-medium">
            29 July – 01 August 2025 · Hyderabad, India
          </p>

          <p className="mt-4 text-gray-500 max-w-3xl mx-auto leading-relaxed">
            The Hyderabad Roadshow 2025 served as a strategic industrial
            networking platform, bringing together leading manufacturers, steel
            innovators, infrastructure companies, and technology providers. The
            roadshow highlighted next-generation manufacturing solutions, supply
            chain collaborations, and live product demonstrations — enabling
            meaningful business connections across South India’s industrial
            ecosystem.
          </p>
        </div>

        {/* ================= PDF SECTION ================= */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Event Brochures & Flyers
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {pdfs.map((pdf) => (
              <div
                key={pdf.id}
                className="group rounded-2xl bg-white shadow-md hover:shadow-xl border p-6 transition"
              >
                {/* PDF Icon */}
                <div className="flex items-center justify-center h-28 rounded-xl bg-red-50 mb-4">
                  <span className="text-5xl">📄</span>
                </div>

                {/* Title */}
                <h4 className="text-gray-800 font-semibold text-center mb-4">
                  {pdf.title}
                </h4>

                {/* Buttons */}
                <div className="flex gap-3 justify-center">
                  <a
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    View
                  </a>

                  <a
                    href={pdf.url}
                    download
                    className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {hyderabad.map((item) => (
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

export default Hyderabad;
