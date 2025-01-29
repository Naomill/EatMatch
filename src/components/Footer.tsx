import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <Link to="/" className="text-white font-bold text-2xl font-kodchasan">EatMatch</Link>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-kodchasan text-center">
            <Link to="/spin-and-dine" className="hover:text-gray-300">Spin & Dine</Link>
            <div className="hidden md:block border border-[0.5px] border-solid border-white h-6"></div>
            <Link to="/eat-by-destiny" className="hover:text-gray-300">Eat by Destiny</Link>
            <div className="hidden md:block border border-[0.5px] border-solid border-white h-6"></div>
            <Link to="/eats-for-every-mood" className="hover:text-gray-300">Eats for Every Mood</Link>
            <div className="hidden md:block border border-[0.5px] border-solid border-white h-6"></div>
            <Link to="/fridge-to-table" className="hover:text-gray-300">Fridge-to-Table</Link>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
          </div>

          <div className="text-sm text-gray-400 font-kodchasan text-center">
            <p>© 2024 EatMatch. All rights reserved.</p>
            <Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;