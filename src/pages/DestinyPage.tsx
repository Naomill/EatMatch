import { useState, useEffect } from 'react';
import { tarotData } from '../data/tarotData';
import NavbarDark from '../components/NavbarDark';
import TarotPopup from '../components/TarotPopup';

const DestinyPage = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [shuffledCards, setShuffledCards] = useState<number[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    const indices = Array.from({ length: tarotData.length }, (_, i) => i);
    setShuffledCards(indices);
  }, []);

  const shuffleCards = () => {
    setIsShuffling(true);
    const indices = Array.from({ length: tarotData.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setShuffledCards(indices);
    setTimeout(() => {
      setIsShuffling(false);
    }, 1000);
  };

  const handleCardClick = (index: number) => {
    if (!isShuffling && index < tarotData.length) {
      setSelectedCard(shuffledCards[index]);
    }
  };

  const selectedCardData = selectedCard !== null ? tarotData[selectedCard] : null;

  return (
    <main
      // className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white"
      className="px-4 min-h-screen"
      style={{
        backgroundImage: 'url("assets/Feature 2 bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff'
      }}
    >
      <NavbarDark />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <h1 className="text-5xl md:text-6xl font-['Luckiest_Guy'] text-center mb-8 text-pink-300">
          LET'S YOUR EAT BE A DESTINY
        </h1>

        <div className="text-center mb-12">
          <button
            onClick={shuffleCards}
            disabled={isShuffling}
            className={`bg-black text-white px-8 py-3 rounded-full font-['Kodchasan'] transition-colors ${isShuffling ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
              }`}
          >
            {isShuffling ? 'Shuffling...' : 'Shuffle Cards'}
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 mb-12 w-full max-w-7xl mx-auto">
            {Array.from({ length: tarotData.length }).map((_, index) => (
              <div
                key={index}
                className={`rounded-lg p-2 cursor-pointer transform transition-all duration-500 ${isShuffling ? 'animate-pulse scale-95' : 'hover:scale-105'
                  }`}
                onClick={() => handleCardClick(index)}
              >
                <img
                  src="/assets/Backside card.svg"
                  alt="Card Back"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

      {selectedCardData && (
        <TarotPopup
          card={selectedCardData}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
    </main >
  );
};

export default DestinyPage;