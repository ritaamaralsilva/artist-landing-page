import { useState } from "react";

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    "Home",
    "About",
    "Music",
    "Video",
    "Live Shows",
    "Workshops",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo / Home */}
        <button
          onClick={() => setActiveSection("home")}
          className={`text-white font-bold text-xl hover:text-[#949492] ${
            activeSection === "home" ? "font-bold" : ""
          }`}
        >
          Home
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {links.slice(1).map((link) => {
            const sectionId = link.toLowerCase().replace(" ", "-");
            return (
              <li key={link}>
                <button
                  onClick={() => setActiveSection(sectionId)}
                  className={`hover:text-[#949492] ${
                    activeSection === sectionId ? "font-bold" : ""
                  }`}
                >
                  {link}
                </button>
              </li>
            );
          })}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/90 space-y-4 py-4">
          {links.map((link) => {
            const sectionId = link.toLowerCase().replace(" ", "-");
            return (
              <li key={link}>
                <button
                  onClick={() => {
                    setActiveSection(sectionId);
                    setIsOpen(false); // fecha menu depois de clicar
                  }}
                  className={`text-white text-lg hover:text-[#949492] ${
                    activeSection === sectionId ? "font-bold" : ""
                  }`}
                >
                  {link}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

