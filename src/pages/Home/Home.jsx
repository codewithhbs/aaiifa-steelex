"use client";
import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

import Hero from "../../components/Hero/Hero";
import AboutConference from "../../components/AboutConference/AboutConference";
import ExhibitorItem from "../../components/ExhibitorItem/ExhibitorItem";
import Legacy from "../../components/Legacy/Legacy";
import Industry from "../../components/Industry/Industry";
import AboutUsHome from "../../components/AboutUsHome/AboutUsHome";
import Clients from "../../components/Clients/Clients";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  // const router = useRouter();

  // Page load par popup open
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleRedirect = () => {
    // router.push("/contact");
    window.location.href = "/upcoming-event";
  };

  return (
    <>
      {/* 🔥 Image Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          
          <div className="relative max-w-[400px] w-full">

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-4 -right-4 cursor-pointer bg-white rounded-full px-3 py-1 shadow-lg text-black font-bold"
            >
              ✕
            </button>

            {/* Clickable Image */}
            <img
              src="https://res.cloudinary.com/duxsqzrot/image/upload/v1770712063/WhatsApp_Image_2026-02-09_at_12.50.25_orre0u.jpg"
              alt="Popup"
              onClick={handleRedirect}
              className="w-full h-auto rounded-xl shadow-2xl cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Page Content */}
      <Hero />
      <AboutConference />
      <ExhibitorItem />
      <Legacy />
      <Industry />
      <Clients />
      <AboutUsHome />
    </>
  );
};

export default Home;
