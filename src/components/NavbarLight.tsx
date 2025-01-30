import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const NavbarLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-5 px-4 md:px-[120px] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className={`font-['Luckiest_Guy'] text-xl ${
              isScrolled ? 'text-black' : 'text-black'
            }`}>
              EatMatch
            </span>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md hover:bg-white/10 focus:outline-none ${
                isScrolled ? 'text-black' : 'text-black'
              }`}
            >
              <Menu size={24} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Spin & Dine
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Eat by Destiny
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Eats for Every Mood
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Fridge-to-Table
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLight;