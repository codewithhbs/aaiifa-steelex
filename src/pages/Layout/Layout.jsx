import React from "react";

const Layout = () => {
  const pdfUrl =
    "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770288116/NESCO_HALL_-_FINAL_icko8l.pdf";

  // Optional preview image (PDF first page thumbnail)
  const previewImage =
    "https://res.cloudinary.com/dxvbzgdgw/image/upload/v1770289690/ccb8febc-7321-4a1e-82a3-6c2d9481229f.png";

  return (
    <section className="bg-[#EEF6EE] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ===== Header ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Exhibition Layout Plan
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Explore the detailed hall layout showcasing stall positioning,
            co-exhibitor zones, food courts, networking areas, and visitor
            pathways for the Hyderabad Roadshow Exhibition.
          </p>
        </div>

        {/* ===== Layout Viewer Card ===== */}
        <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">

          {/* Preview Image */}
          <div className="bg-gray-100 p-6 flex justify-center">
            <img
              src={previewImage}
              alt="Layout Preview"
              className="rounded-xl shadow-lg max-h-[500px] object-contain hover:scale-[1.02] transition"
            />
          </div>

          {/* Content */}
          <div className="px-8 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                STEELEX 2025 – Hall Layout
              </h3>

              <p className="text-gray-600 mt-1 text-sm">
                Complete stall distribution, seating areas, food zones &
                networking sections.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#00C950] text-white hover:bg-[#009b3e] transition shadow"
              >
                View Full Layout
              </a>

              <a
                href={pdfUrl}
                download
                className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
              >
                Download PDF
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Layout;
