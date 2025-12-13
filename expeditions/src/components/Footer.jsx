import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#829442] text-light py-6">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm text-white">&copy; {new Date().getFullYear()} Southern Expeditions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
