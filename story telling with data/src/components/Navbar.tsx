import React from 'react';
import { Sprout } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sprout className="w-8 h-8" />
            <span className="text-xl font-bold">Farmer Welfare Analysis</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#overview">Overview</NavLink>
            <NavLink href="#visualization">Visualization</NavLink>
            <NavLink href="#analysis">Analysis</NavLink>
            <NavLink href="#recommendations">Recommendations</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="text-gray-100 hover:text-white hover:underline transition-colors"
    >
      {children}
    </a>
  );
}

export default Navbar;