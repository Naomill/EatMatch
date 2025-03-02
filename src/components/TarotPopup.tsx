import React from 'react';
import { X } from 'lucide-react';

interface Food {
  id: number;
  name: string;
  image: string;
}

interface TarotPopupProps {
  card: {
    name: string;
    image: string;
    prophecy: string;
    foods: Food[];
  };
  onClose: () => void;
}

const TarotPopup: React.FC<TarotPopupProps> = ({ card, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-indigo-900 to-purple-900 rounded-3xl p-6 max-w-3xl w-full mx-auto relative text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[2/3] overflow-hidden">
            <img
              src={card.image}
              alt={card.name}
              className=" h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-['Luckiest_Guy'] mb-4">SUGGEST MENU</h2>
            <div className="grid grid-cols-2 gap-3">
              {card.foods.map((food) => (
                <div
                  key={food.id}
                  className="bg-white rounded-xl overflow-hidden"
                >
                  <div className="aspect-square">
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-black text-center font-['Kodchasan'] text-sm">
                      {food.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-['Luckiest_Guy'] mb-3 text-center">PROPHECY</h2>
          <p className="font-['Kodchasan'] text-center leading-relaxed text-sm">
            {card.prophecy}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TarotPopup;