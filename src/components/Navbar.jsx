import MyImage from "../assets/Me.jpeg"
import { useState, useEffect } from "react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowNavbar(
        currentScrollY < lastScrollY || currentScrollY < 50
      );

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <nav className={`fixed mt-5 ml-[2%] w-[96%] mr-[2%]  z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-[150%]"}`}>
      <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-md">

        {/* Logo */}
        <a href="#" className="text-xl font-bold text-gray-900 dancing-script-regular">
          Mahamudul Hasan
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium text-gray-700 transition hover:text-gray-500">
            Home
          </a>

          <a href="#about" className="text-sm font-medium text-gray-700 transition hover:text-gray-500">
            About
          </a>

          <a href="#skills" className="text-sm font-medium text-gray-700 transition hover:text-gray-500">
            Skills
          </a>

          <a href="#problem" className="text-sm font-medium text-gray-700 transition hover:text-gray-500">
            Problem Solving
          </a>

          <a href="#projects" className="text-sm font-medium text-gray-700 transition hover:text-gray-500">
            Projects
          </a>

          <a href="#achievements" className="text-sm font-medium text-gray-700 transition hover:text-gray-500">
            Achievements
          </a>

          <a href="#education" className="text-sm font-medium text-gray-700 transition hover:text-gray-500">
            Education
          </a>

          <a href="#contact" className="text-sm font-medium text-gray-700 transition hover:text-gray-500">
            Contact
          </a>

        </div>

        {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute right-4 top-full z-50
                        w-40 rounded-xl bg-white p-3
                        shadow-lg border border-gray-100
                        md:hidden">

            <a
              href='#home'
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-2 py-3
                         text-sm font-medium text-gray-700 transition hover:text-gray-500"
            >
              Home
            </a>

            <a
              href='#about'
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-2 py-3
                         text-sm font-medium text-gray-700 transition hover:text-gray-500"
            >
              About
            </a>

            <a
              href='#skills'
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-2 py-3
                         text-sm font-medium text-gray-700 transition hover:text-gray-500"
            >
              Skills
            </a>

            <a
              href='#problem'
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-2 py-3
                         text-sm font-medium text-gray-700 transition hover:text-gray-500"
            >
              Problem Solving
            </a>

            <a
              href='#achievements'
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-2 py-3
                         text-sm font-medium text-gray-700 transition hover:text-gray-500"
            >
              Achievements
            </a>

            <a
              href='#education'
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-2 py-3
                         text-sm font-medium text-gray-700 transition hover:text-gray-500"
            >
              Education
            </a>

            <a
              href='#contact'
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-2 py-3
                         text-sm font-medium text-gray-700 transition hover:text-gray-500"
            >
              Contact
            </a>
          
        </div>
      )}
      </div>
    </nav>
  )
}
export default Navbar
