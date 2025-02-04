import { useState } from 'react';
import MoodCard from '../components/MoodCard';
import FoodPopup from '../components/FoodPopup';
import { foodData } from '../data/foodByMood';
import NavbarLight from '../components/NavbarLight';

function MoodsPage() {
  const [selectedFood, setSelectedFood] = useState<any>(null);

  const handleMoodSelect = (mood: string) => {
    const moodFoods = foodData[mood];
    const randomFood = moodFoods[Math.floor(Math.random() * moodFoods.length)];
    setSelectedFood(randomFood);
  };

  return (
    <main 
      className="px-4 min-h-screen" 
      style={{
        backgroundImage: 'url("assets/Feature 3 bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff'
      }}
    >
      <NavbarLight />
      <div className="max-w-7xl mx-auto pt-24">
        <h1 className="text-4xl md:text-5xl font-['Luckiest_Guy'] text-center mb-4">
          HOW ARE YOU FEELING TODAY?
        </h1>
        <p className="text-center text-gray-600 mb-12 font-['Kodchasan']">
          Tell us how you feel, we'll tell you what to eat.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <MoodCard
            mood="happy"
            color="bg-[#FFD569]"
            onClick={() => handleMoodSelect('happy')}
          />
          <MoodCard
            mood="angry"
            color="bg-[#FA7878]"
            onClick={() => handleMoodSelect('angry')}
          />
          <MoodCard
            mood="surprise"
            color="bg-[#C1DAFF]"
            onClick={() => handleMoodSelect('surprise')}
          />
          <MoodCard
            mood="fear"
            color="bg-[#B3A6FF]"
            onClick={() => handleMoodSelect('fear')}
          />
          <MoodCard
            mood="envy"
            color="bg-[#A8FFD5]"
            onClick={() => handleMoodSelect('envy')}
          />
        </div>
      </div>

      {selectedFood && (
        <FoodPopup
          food={selectedFood}
          onClose={() => setSelectedFood(null)}
        />
      )}
    </main>
  );
}

export default MoodsPage;