import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
<p className="text-2xl font-bold">Finter</p>
            <p className="text-sm">
              Filter for Finance - Empowering smarter financial decisions.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: support@finter.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
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
