import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdBox from '../components/AdBox';
import { ads } from '../data/ads';

const AdsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8 md:py-12">
        <div className="max-w-[1680px] mx-auto px-4 md:px-[120px]">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-kodchasan text-3xl md:text-4xl font-bold mb-4">Discover Delicious Deals!</h1>
            <p className="font-kodchasan text-gray-600 max-w-2xl mx-auto px-4">
              Find amazing food offers and promotions from online sellers. Whether you're craving
              something new or looking for great deals, we've got you covered!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {ads.map((ad, index) => (
              <AdBox key={index} {...ad} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdsPage;