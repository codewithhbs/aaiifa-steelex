import bg from './banner.jpg'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black">

      {/* Background Image */}
      <img
        src={bg}
        alt="AIFA STEELEX"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
          AIFA <span className="text-green-500">STEELEX</span>{" "}
          <span className="text-white">2025</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Unlocking business opportunities through sustainable innovation.
          <br />
          Join India’s leading steel stakeholders to shape a future-ready
          industrial ecosystem.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <button className="px-8 py-3 rounded-full bg-green-500 hover:bg-green-600 transition font-semibold text-black">
            Register Now
          </button>
          <a href='#contact' className="px-8 py-3 rounded-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition font-semibold">
            Contact us
          </a>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-black/70 backdrop-blur-md rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border border-white/10">

          <div className="text-center">
            <h2 className="text-4xl font-bold">300+</h2>
            <p className="text-green-500 tracking-widest text-sm mt-1">
              EXHIBITORS
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold">50000+</h2>
            <p className="text-green-500 tracking-widest text-sm mt-1">
              VISITORS
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold">3500+</h2>
            <p className="text-green-500 tracking-widest text-sm mt-1">
              DELEGATES
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-green-500 tracking-widest text-sm mt-1">
              SPEAKERS
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
