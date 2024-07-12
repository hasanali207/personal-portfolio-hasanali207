import React from 'react';

const Header = () => {

  const navitems = (
    <>
      <li className=" mr-3 text-white-700 hover:underline">
        <a href="/">Home</a>
      </li>
      <li className="mr-3 text-white-700 hover:underline">
        <a href="/portfolio">Portfolio</a>
      </li>
      <li className="mr-3 text-white-700 hover:underline">
        <a href="/timeline">Timeline</a>
      </li>
      <li className="mr-3 text-white-700 hover:underline">
        <a href="/about">About</a>
      </li>
     
      <li className="mr-3 text-white-700 hover:underline">
        <a href="/contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-teal-500 to-blue-900 p-4 shadow-md relative">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow relative">
            {navitems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">HasanAli</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {navitems}
        </ul>
      </div>
    </div>
  );
};

export default Header;


// <header className="bg-gradient-to-r from-teal-500 to-blue-900 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-lg font-bold">
//           My Portfolio
//         </div>
//         <nav className="space-x-4">
//           <ul>

//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/">Home</a></li>
//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/portfolio">Portfolio</a></li>
//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/timeline">Timeline</a></li>
//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/about">About</a></li>
//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/blog">Blog</a></li>
//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/contact">Contact</a></li>
           
//           </ul>
//         </nav>
//       </div>
//     </header>