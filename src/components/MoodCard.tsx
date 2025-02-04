import React, { useState, useEffect } from 'react';

interface MoodCardProps {
  mood: string;
  color: string;
  onClick: () => void;
}

const moodImages = {
  happy: ["/assets/happy1.svg", "/assets/happy2.svg"],
  angry: ["/assets/angry1.svg", "/assets/angry2.svg"],
  surprise: ["/assets/surprise1.svg", "/assets/surprise2.svg"],
  fear: ["/assets/fear1.svg", "/assets/fear2.svg"],
  envy: ["/assets/envy1.svg", "/assets/envy2.svg"],
};

const MoodCard: React.FC<MoodCardProps> = ({ mood, color, onClick }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${color} rounded-lg cursor-pointer transform transition-transform hover:scale-105 flex flex-col justify-center items-center gap-[10px] w-[230px] h-[360px]`}
      onClick={onClick}
    >
      <div className="w-36 h-36 overflow-hidden mb-4 relative">
        {moodImages[mood as keyof typeof moodImages].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={mood}
            className={`absolute w-full h-full object-cover transition-opacity duration-200 ${
              currentImage === index ? "translate-x-0" : "-translate-x-full"
            }`}
          />
        ))}
      </div>

      <h3 className="text-xl font-semibold uppercase">{mood}</h3>
    </div>
  );
};

export default MoodCard;