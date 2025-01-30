import React from 'react';
import { X } from 'lucide-react';

interface FoodPopupProps {
  food: {
    title: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

const FoodPopup: React.FC<FoodPopupProps> = ({ food, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#FFF8E7] rounded-3xl p-8 max-w-lg w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-['Luckiest_Guy'] mb-4 text-center">Your menu is...</h2>
        
        <h3 className="text-3xl font-['Luckiest_Guy'] mb-6 text-center">{food.title}</h3>
        
        <div className="mb-6">
          <img
            src={food.image}
            alt={food.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <p className="text-gray-700 text-center font-['Kodchasan']">{food.description}</p>
      </div>
    </div>
  );
};

export default FoodPopup