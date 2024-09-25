import React, { useState } from 'react';

const Navbar = () => {
  // State to track if the mobile menu is open or not
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="h-screen w-screen bg-slate-600" id="card">
      {/* Navbar */}
      <div className="w-screen flex h-16 flex-row items-center justify-between bg-slate-800 p-3 md:h-24">
        <div>logo</div>

        {/* Mobile menu button (visible on small screens) */}
        <div className="block sm:hidden">
          <button onClick={toggleMobileMenu}>Menu</button>
        </div>

        {/* Desktop menu (hidden on small screens) */}
        <div className="hidden sm:block" id="desktop_menu">
          <ul className="flex flex-row flex-wrap gap-5">
            <li>HOME</li>
            <li>CONTACT</li>
            <li>ABOUT US</li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (visible based on state) */}
      {isMobileMenuOpen && (
        <div className="h-80 w-screen bg-slate-400">
          <ul className="flex flex-col items-start p-5 gap-3">
            <li>HOME</li>
            <li>CONTACT</li>
            <li>ABOUT US</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
