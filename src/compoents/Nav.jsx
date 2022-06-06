import React, { useState } from 'react';

const Nav = () => {
  const [isMObileMenuOpen, setIsMObileMenuOpen] = useState(false);
  const navLinks = [{ 'text': 'Encode / Decpde', 'link': 'encode-decode' }, { 'text': 'About', 'link': 'about' }]
    .map(nl => <a key={nl.text} className="no-underline text-gray-800 font-semibold hover:text-gray-600" href={`#${nl.link}`} >{nl.text}</a>);
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-500">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="#home" className="text-xl font-bold no-underline text-gray-800 hover:text-gray-600">SecMessage</a>
        </div>
        <nav className="hidden md:block space-x-6">
          {navLinks}
        </nav>
        <button type="button" aria-label="Toggle mobile menu" onClick={() => setIsMObileMenuOpen(!isMObileMenuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50">
          {isMObileMenuOpen
            ? <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					    </svg>
            : <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
          }
        </button>
      </div>

      {isMObileMenuOpen ? 
        <nav className="p-4 flex flex-col space-y-3 md:hidden">
          {navLinks}
        </nav>
        : 
        ''
      }

    </div>
  );
};

export default Nav;