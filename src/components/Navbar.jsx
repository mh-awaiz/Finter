import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Finter
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        {/* Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-primary md:flex gap-6 md:items-center transition-all duration-300 ease-in ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
