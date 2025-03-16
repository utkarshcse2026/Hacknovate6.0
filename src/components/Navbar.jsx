import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null); // Reference to the nav menu

  // Handle navigation
  const handleNavigation = (path, isExternal = false, externalUrl = "") => {
    console.log("Navigating to:", isExternal ? externalUrl : path);
    
    if (isExternal && externalUrl) {
      // Open external link in new tab
      window.open(externalUrl, "_blank");
    } else {
      // Use React Router for internal navigation
      navigate(path);
    }
    
    setIsOpen(false);
  };

  // Add click outside event listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if the menu is open and the click is outside the menu and hamburger button
      if (isOpen && navRef.current && !navRef.current.contains(event.target) && 
          !event.target.closest('button[data-hamburger="true"]')) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="relative p-4 lg:hidden">
      {/* Hamburger Menu Button */}
      {!isOpen && (
        <div className="lg:hidden fixed top-4 right-4 z-[1100] transition-opacity duration-300">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsOpen(true)}
            data-hamburger="true" // Add data attribute to identify hamburger
          >
            <Menu size={28} className="transition-transform duration-300" />
          </button>
        </div>
      )}

      {/* Navigation Menu */}
      <div
        ref={navRef} // Add ref to this element
        className={`fixed top-10 right-4 w-54 bg-[#918F8F] bg-opacity-80 shadow-lg p-4 rounded-2xl backdrop-blur-sm transform transition-all duration-500 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 1000 }}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-black">
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-4 space-y-3 font-serif">
          {[
            { name: "About", path: "/" },
            { name: "Team", path: "/team" },
            { name: "COC", path: "/codeofconduct" },
            { name: "Sponsor Us", path: "/sponsor", isExternal: true, externalUrl: "https://lu.ma/4phnzjrb" },
          ].map((item) => (
            <li 
              key={item.name} 
              onClick={() => handleNavigation(item.path, item.isExternal, item.externalUrl)}
            >
              <button className="block px-6 py-2 text-black hover:text-white rounded-full transition-all duration-300">
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;