import React from 'react';

interface MoodCardProps {
  mood: string;
  color: string;
  onClick: () => void;
}

const moodImages = {
  happy: "https://images.unsplash.com/photo-1531579234-a0a99da45460?w=600&auto=format&fit=crop&q=60",
  angry: "https://images.unsplash.com/photo-1594314813959-dcc640ce56cd?w=600&auto=format&fit=crop&q=60",
  surprise: "https://images.unsplash.com/photo-1575467678930-c7acd65d6470?w=600&auto=format&fit=crop&q=60",
  fear: "https://images.unsplash.com/photo-1626688226927-66f0cd0e0a00?w=600&auto=format&fit=crop&q=60",
  envy: "https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=600&auto=format&fit=crop&q=60"
};

const MoodCard: React.FC<MoodCardProps> = ({ mood, color, onClick }) => {
  return (
    <div
      className={`${color} rounded-lg cursor-pointer transform transition-transform hover:scale-105 flex flex-col justify-center items-center gap-[10px] w-[220px] h-[350px]`}
      onClick={onClick}
    >
      <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
        <img 
          src={moodImages[mood as keyof typeof moodImages]} 
          alt={mood}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-['Luckiest_Guy'] text-3xl uppercase">{mood}</h3>
    </div>
  );
};

export default MoodCard;