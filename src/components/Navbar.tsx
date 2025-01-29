import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#FFB800] py-5 px-4 md:px-[120px] shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black font-bold text-2xl font-kodchasan">EatMatch</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/spin-and-dine" className="text-black hover:text-gray-800 font-kodchasan">Spin & Dine</Link>
          <div className="border border-[0.5px] border-solid border-black h-6"></div>
          <Link to="/eat-by-destiny" className="text-black hover:text-gray-800 font-kodchasan">Eat by Destiny</Link>
          <div className="border border-[0.5px] border-solid border-black h-6"></div>
          <Link to="/eats-for-every-mood" className="text-black hover:text-gray-800 font-kodchasan">Eats for Every Mood</Link>
          <div className="border border-[0.5px] border-solid border-black h-6"></div>
          <Link to="/fridge-to-table" className="text-black hover:text-gray-800 font-kodchasan">Fridge-to-Table</Link>
        </div>
        
        <button className="hidden md:block bg-black text-white px-4 py-2 rounded-full font-kodchasan">
          Explore Deals
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FFB800] shadow-md">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              to="/spin-and-dine" 
              className="text-black hover:text-gray-800 font-kodchasan"
              onClick={() => setIsMenuOpen(false)}
            >
              Spin & Dine
            </Link>
            <Link 
              to="/eat-by-destiny" 
              className="text-black hover:text-gray-800 font-kodchasan"
              onClick={() => setIsMenuOpen(false)}
            >
              Eat by Destiny
            </Link>
            <Link 
              to="/eats-for-every-mood" 
              className="text-black hover:text-gray-800 font-kodchasan"
              onClick={() => setIsMenuOpen(false)}
            >
              Eats for Every Mood
            </Link>
            <Link 
              to="/fridge-to-table" 
              className="text-black hover:text-gray-800 font-kodchasan"
              onClick={() => setIsMenuOpen(false)}
            >
              Fridge-to-Table
            </Link>
            <button className="bg-black text-white px-4 py-2 rounded-md font-kodchasan w-full">
              Explore Deals
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar