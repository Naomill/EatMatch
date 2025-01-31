interface Food {
    id: number;
    name: string;
    image: string;
  }
  
  interface TarotCard {
    id: number;
    name: string;
    image: string;
    prophecy: string;
    foods: Food[];
  }
  
  export const tarotData: TarotCard[] = [
    {
      id: 0,
      name: "The Fool",
      image: "/assets/TarotCard/The Fool.svg",
      prophecy: "The Fool card represents new beginnings, innocence, spontaneity, and a free spirit. This suggests it's time to embrace new experiences with an open heart and mind.",
      foods: [
        {
          id: 1,
          name: "Spring Garden Salad",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
        },
        {
          id: 2,
          name: "Fresh Fruit Smoothie Bowl",
          image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38"
        },
        {
          id: 3,
          name: "Morning Glory Breakfast",
          image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666"
        },
        {
          id: 4,
          name: "Zen Green Tea",
          image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5"
        }
      ]
    },
    {
      id: 1,
      name: "The Magician",
      image: "/assets/TarotCard/Magician.svg",
      prophecy: "The Magician represents manifestation, resourcefulness, and inspired action. Your skills and abilities are aligned to create something extraordinary.",
      foods: [
        {
          id: 5,
          name: "Rainbow Sushi Roll",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
        },
        {
          id: 6,
          name: "Magical Purple Smoothie",
          image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
        },
        {
          id: 7,
          name: "Golden Turmeric Latte",
          image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5"
        },
        {
          id: 8,
          name: "Starry Night Pasta",
          image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8"
        }
      ]
    },
    {
      id: 2,
      name: "The High Priestess",
      image: "/assets/TarotCard/High Priestess.svg",
      prophecy: "The High Priestess signifies intuition, mystery, and inner knowledge. Trust your instincts and listen to your inner voice during this time.",
      foods: [
        {
          id: 9,
          name: "Mystical Blue Tea",
          image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc"
        },
        {
          id: 10,
          name: "Moon Phase Cookies",
          image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
        },
        {
          id: 11,
          name: "Midnight Berry Tart",
          image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81"
        },
        {
          id: 12,
          name: "Sacred Grain Bowl",
          image: "https://images.unsplash.com/photo-1540914124281-342587941389"
        }
      ]
    },
    // ... Adding more cards with their respective foods
    // I'll continue adding the remaining cards in subsequent messages due to length
  ];