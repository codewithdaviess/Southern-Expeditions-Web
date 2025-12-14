import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative font-light text-gray-800 after:block after:absolute after:left-0 after:h-[2px] after:bg-[#829442] after:-bottom-2 after:transition-all after:duration-300
   ${
     isActive
       ? "text-[#829442] after:w-full"
       : "after:w-0 hover:after:w-full hover:text-[#829442]"
   }`;

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white text-gray-800 shadow-2xl py-4 fixed w-full z-40">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://images.ctfassets.net/z6r9plseckka/6lwhZw1tyPYCrUbRlTYwwX/460c2d7c768c979282e38025c3d21213/logo.png"
              alt="Logo"
              className="h-20 w-auto"
            />
          </div>

          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:flex">
            <NavLink
              to="/#"
              className="bg-[#829442] text-white px-4 py-3 rounded-xl hover:opacity-90 transition-colors duration-200"
            >
              Book Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#829442] text-white shadow-lg 
              transform transition-transform duration-300 ease-in-out z-50 md:hidden
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="flex justify-end px-4 pt-10 pb-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col px-4 pt-4 space-y-2">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `py-3 font-light rounded-xl px-4 transition-colors
             ${
               isActive
                 ? "bg-white/15 text-white"
                 : "text-white hover:bg-white/10"
             }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>

              {index < navLinks.length - 1 && (
                <div className="border-b border-white/20 md:hidden" />
              )}
            </React.Fragment>
          ))}

          <div className="border-b border-white/20 md:hidden" />

          {/* Mobile Book Now Button */}
          <NavLink
            to="/#"
            className="p-4 font-medium text-[#829442] bg-white hover:text-[#829442] rounded-xl px-4"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            Book Now{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
