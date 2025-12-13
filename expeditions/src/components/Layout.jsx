import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar /> 
      <main className="pt-28">
        {children}
      </main>
      <footer className="bg-gray-100 py-6 text-center">Footer content</footer>
    </div>
  );
}

export default Layout;
