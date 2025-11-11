import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, FolderGit2, Mail } from "lucide-react";
import { FiCodepen } from "react-icons/fi";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Skills", path: "/skills", icon: <User size={18} /> },
    { name: "Projects", path: "/projects", icon: <FolderGit2 size={18} /> },
    { name: "Services", path: "/services", icon: <FiCodepen  size={18} /> },
    { name: "Me", path: "/me", icon: <Mail size={18} /> },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300  ${
        scrolled
          ? "bg-[#0B0C10]/95 backdrop-blur-md shadow-md"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide text-gray-100 hover:text-indigo-400 transition-colors"
        >
          Sachin Kumar
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ name, path, icon }) => (
            <li key={name}>
              <Link
                to={path}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? "text-indigo-400"
                    : "text-gray-300 hover:text-indigo-300"
                }`}
              >
                {icon}
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-indigo-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#11121A] border-t border-gray-800">
          <ul className="flex flex-col items-center py-4 space-y-3">
            {links.map(({ name, path, icon }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 text-base font-medium transition-colors ${
                    location.pathname === path
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-indigo-300"
                  }`}
                >
                  {icon}
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
