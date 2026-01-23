import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import logo from "./aaiifa-logo.png";
// import { FaFacebookF } from "react-icons/fa";
import partnerpdf from "../../../public/pdf/Steelex-2025-Partners1.pdf";
import invitationPdf from "../../../public/pdf/Invitation-to-Participate-in-A-STEEL-MAHAKUMBH-Organized-by-AIIFA-SteelEx-2025.pdf";
import partnerBrochure from "../../../public/pdf/AIIFA-STEELEX-2025_BROCHURE-VIP_02.pdf";
import invitaionLetter from '../../../public/pdf/Invitation-Letter.pdf'
import greenInvitation from '../../../public/pdf/GreenSteel_Award_Invitation.pdf'

const Footer = () => {
  return (
    <footer id="contact" className="bg-linear-to-b from-[#050914] to-[#02040a] text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 pb-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="AIFA" className="h-full w-auto" />
            </div>

            <p className="text-sm text-gray-400 max-w-sm">
              The 37th National Conference & Exhibition on Sustainable Steel
              Manufacturing.
            </p>

            <div className="flex gap-4 mt-6 text-gray-400">
              <a
                href="https://www.youtube.com/channel/UCgX9MQQDCQgP0cryzxKlGkw"
                target="_blank"
                className="hover:text-green-500"
              >
                <Instagram />
              </a>
              <a
                href="https://x.com/SteelEx_AIIFA"
                target="_blank"
                className="hover:text-green-500"
              >
                <Twitter />
              </a>
              <a
                href="https://www.facebook.com/SteelEx.AIIFA"
                target="_blank"
                className="hover:text-green-500"
              >
                <Facebook />
              </a>
              <a
                href="https://www.youtube.com/channel/UCgX9MQQDCQgP0cryzxKlGkw"
                target="_blank"
                className="hover:text-green-500"
              >
                <Youtube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={partnerBrochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  AIIFA STEELEX 2025 Brochure
                </a>
              </li>
              <li>
                <a
                  href={invitationPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  Invitation To Participate
                </a>
              </li>
              <li>
                <a
                  href={invitaionLetter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  Invitation Letter
                </a>
              </li>
              <li>
                <a
                  href={greenInvitation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  Green Steel Award Invitation
                </a>
              </li>
              <li>
                <a
                  href={partnerpdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  AIIFA STEELEX 2025 Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-green-500 w-5 h-5" />
                <span>
                  504, Tower-I, Pearls Omaxe, Netaji Subhash Place, Pitampura,
                  New Delhi-110034
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="text-green-500 w-5 h-5" />
                <span>
                  +91-011-42725051 / 27351345 / 47 <br />
                  +91-9810410868 / 9810410815
                </span>
              </li>

              <li className="flex gap-3">
                <Mail className="text-green-500 w-5 h-5" />
                <span>aifa.steelx@aiifa.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 AIIFA Steelex. All rights reserved.</p>
          {/* <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-green-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-500">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
