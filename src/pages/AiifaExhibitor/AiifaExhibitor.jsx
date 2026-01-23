import logo from "../../assets/Image/logo.webp"; // top logo
import kp1 from "../../assets/Image/t1.webp";
import kp2 from "../../assets/Image/t2.webp";
import sa1 from "../../assets/Image/logo-1.jpg";
import sa2 from "../../assets/Image/logo-2.jpg";
import sa3 from "../../assets/Image/logo-3.jpg";
import sa4 from "../../assets/Image/logo-4.jpg";
import sa5 from "../../assets/Image/logo-5.jpg";
import sa6 from "../../assets/Image/logo-6.jpg";
import sa7 from "../../assets/Image/logo-7.jpg";
import sa8 from "../../assets/Image/logo-8.jpg";
import sa9 from "../../assets/Image/logo-9.jpg";
import sa10 from "../../assets/Image/logo-10.jpg";
import sa11 from "../../assets/Image/logo-11.jpg";
import sa12 from "../../assets/Image/logo-12.jpg";
import sa13 from "../../assets/Image/logo-13.jpg";
import sa14 from "../../assets/Image/logo-14.jpg";

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

const AiifaExhibitor = () => {
  return (
    <section className="bg-[#eef6ee] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Card */}
        <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-2xl mx-auto">
          <img
            src={logo}
            alt="Steel Mahakumbh"
            className="mx-auto h-24 object-contain"
          />
          <h1 className="mt-6 text-2xl font-bold tracking-wide">
            AIIFA EXHIBITOR APPLICATION FORM – 2025
          </h1>
          <div className="w-12 h-1 bg-green-600 mx-auto mt-4 rounded" />
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
            <AutoScrollRow logos={[sa1, sa2, sa3, sa4, sa5, sa6, sa7, sa8, sa9, sa10, sa11, sa12, sa13, sa14]} />
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

export default AiifaExhibitor;
