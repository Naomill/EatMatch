import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#FFC145] z-50 py-5 px-4 md:px-[120px] transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        <img src='/assets/Logo-light.svg' alt='Logo Eatmatch' className='h-10 w-auto'/>
        </Link>

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
          <div className="border-[0.5px] border-solid border-black h-6"></div>
          <Link to="/eat-by-destiny" className="text-black hover:text-gray-800 font-kodchasan">Eat by Destiny</Link>
          <div className="border-[0.5px] border-solid border-black h-6"></div>
          <Link to="/eats-for-every-mood" className="text-black hover:text-gray-800 font-kodchasan">Eats for Every Mood</Link>
          <div className="border-[0.5px] border-solid border-black h-6"></div>
          <Link to="/fridge-to-table" className="text-black hover:text-gray-800 font-kodchasan">Fridge-to-Table</Link>
        </div>

        <Link to="/ads" className="hidden md:block bg-black text-white px-4 py-2 rounded-full font-kodchasan">
          Explore Deals
        </Link>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FFC145] shadow-md">
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
            <Link to="/ads"
              className="bg-black text-white px-4 py-2 rounded-md font-kodchasan text-center" onClick={() => setIsMenuOpen(false)}>
              Explore Deals
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar