import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    "About",
    "Music",
    "Video",
    "Live Shows",
    "Workshops",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-20">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
      <a href="#home" className="text-white font-bold text-xl hover:text-yellow-400">
  Home
</a>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-yellow-400">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/90 space-y-4 py-4">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-white text-lg hover:text-yellow-400">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
