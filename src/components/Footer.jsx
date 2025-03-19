import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="text-2xl font-bold">Finter</Link>
            <p className="text-sm">
              Filter for Finance - Empowering smarter financial decisions.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: support@finter.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-2">
              <a to="#" className="hover:text-blue-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a to="#" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a to="#" className="hover:text-blue-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm mt-6 border-t border-white/20 pt-4">
          &copy; {new Date().getFullYear()} Finter. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
