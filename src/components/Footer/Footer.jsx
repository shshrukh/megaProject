import React from "react";
import { Link } from "react-router-dom";
import {Logo} from "../index";
import { Navigate } from "react-router-dom";

const Footer = () => {
  // const navigate = Navigate();
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300 pt-16 pb-10 border-t border-gray-800">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + Tagline */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <Logo width="100px" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting beautiful experiences with modern web technologies.
            </p>
            <p className="mt-5 text-xs text-gray-500">
              © {new Date().getFullYear()} Shahrukh Arbaz — All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map((item, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="relative group inline-block text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {["Account", "Help", "Contact Us", "Customer Support"].map((item, i) => (
                <li key={i}>
                  <Link
                    to="/"
                    className="relative group inline-block text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Legals
            </h3>
            <ul className="space-y-3">
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.toLowerCase().replace(" ", "-")}
                    className="relative group inline-block text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-14 border-t border-gray-800/60"></div>

        {/* Bottom Text */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Built with 💜 using React, TailwindCSS, and endless creativity.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
