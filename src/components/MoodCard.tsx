import React from 'react';

interface MoodCardProps {
  mood: string;
  color: string;
  onClick: () => void;
}

const moodImages = {
  happy: "/assets/Happy-face.svg",
  angry: "/assets/Angry-face.svg",
  surprise: "/assets/Surprise-face.svg",
  fear: "/assets/Fear-face.svg",
  envy: "/assets/Envy-face.svg"
};

const MoodCard: React.FC<MoodCardProps> = ({ mood, color, onClick }) => {
  return (
    <div
      className={`${color} rounded-lg cursor-pointer transform transition-transform hover:scale-105 flex flex-col justify-center items-center gap-[10px] w-[220px] h-[350px]`}
      onClick={onClick}
    >
      <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
        <img 
          src={moodImages[mood as keyof typeof moodImages]} 
          alt={mood}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold uppercase">{mood}</h3>
    </div>
  );
};

export default MoodCard;