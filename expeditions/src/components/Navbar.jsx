import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Detect current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Destinations", path: "/destinations" },
    { name: "Organised Trips", path: "/organized-trips" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="MyTravel Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "text-[#9aa04f] font-bold border-b-2 border-[#9aa04f]"
                    : "hover:text-[#9aa04f]"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside drawer */}
        <div className="flex justify-start pt-10 px-12">
          <button onClick={toggleMenu} aria-label="Close menu">
            <X size={28} className="text-gray-700" />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col p-12 space-y-10 text-gray-700 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "text-[#9aa04f] font-bold"
                    : "hover:text-[#9aa04f]"
                }
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
