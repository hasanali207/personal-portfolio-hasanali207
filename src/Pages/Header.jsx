import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 to-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          My Portfolio
        </div>
        <nav className="space-x-4">
          <ul>

            <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/">Home</a></li>
            <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/portfolio">Portfolio</a></li>
            <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/timeline">Timeline</a></li>
            <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/about">About</a></li>
            <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/blog">Blog</a></li>
            <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/contact">Contact</a></li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
