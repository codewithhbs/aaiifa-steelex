import React from "react";
import { Calendar, MapPin, Brain, Users, Rocket } from "lucide-react";
import bg from './1.png'

const AboutConference = () => {
  return (
    <section id="conference" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          AIIFA Sustainable Steel Manufacturers Association
        </h2>
        <p className="text-2xl font-semibold text-green-500 mt-2">
          37th National Conference
        </p>

        {/* Date & Location */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-5 py-2 bg-gray-100 rounded-full">
            <Calendar className="text-green-500 w-5 h-5" />
            <span className="text-sm font-medium">19 – 20 SEPT 2025</span>
          </div>

          <div className="flex items-center gap-2 px-5 py-2 bg-gray-100 rounded-full">
            <MapPin className="text-green-500 w-5 h-5" />
            <span className="text-sm font-medium">
              Bombay Exhibition Centre, Goregaon, Mumbai
            </span>
          </div>
        </div>

        {/* About */}
        <h3 className="text-3xl font-bold mt-16 mb-6">
          About The Conference
        </h3>

        <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
          India’s secondary steel sector is at a turning point, and this
          conference is where growth meets responsibility. Over two days,
          industry leaders, policymakers, researchers, and manufacturers come
          together to explore how sustainability can be profitable, scalable,
          and future-ready.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-green-500 text-white rounded-2xl p-8 shadow-lg relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow">
              <Brain className="text-green-500 w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mt-10">Why It Matters</h4>
            <p className="mt-4 text-sm leading-relaxed">
              As India moves toward global leadership in steel production, the
              focus shifts to low-carbon pathways, renewable energy integration,
              energy-efficient technologies, and circular practices like scrap
              recycling—without compromising competitiveness.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-500 text-white rounded-2xl p-8 shadow-lg relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow">
              <Users className="text-green-500 w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mt-10">Who you’ll Meet</h4>
            <p className="mt-4 text-sm leading-relaxed">
              The conference will host 3,500+ delegates and 300+ exhibitors,
              including representatives from government bodies, CPSEs, research
              institutions, DRI and sponge iron units, induction furnace
              producers, and allied industries—creating a rare, full-value-chain
              dialogue.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-green-500 text-white rounded-2xl p-8 shadow-lg relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow">
              <Rocket className="text-green-500 w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mt-10">What this Drives</h4>
            <p className="mt-4 text-sm leading-relaxed">
              Through policy discussions, collaborative sessions, and
              technology showcases, the event aims to shape a resilient
              green-steel ecosystem—one that turns sustainability from a mandate
              into a strategic advantage.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutConference;
