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
    image: "https://i.imgur.com/QJ1FjGv.png",
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
    image: "https://i.imgur.com/2X3wQZS.png",
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
  {
    id: 3,
    name: "The Empress",
    image: "https://i.imgur.com/QKw4lY1.png",
    prophecy: "The Empress symbolizes abundance, nurturing, and growth. This is a time of creativity and enjoying life's pleasures.",
    foods: [
      {
        id: 13,
        name: "Garden Fresh Pasta",
        image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856"
      },
      {
        id: 14,
        name: "Honey Lavender Tea",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      },
      {
        id: 15,
        name: "Fruit Garden Platter",
        image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9"
      },
      {
        id: 16,
        name: "Rose Petal Cake",
        image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b"
      }
    ]
  },
  {
    id: 4,
    name: "The Emperor",
    image: "https://i.imgur.com/0yWxqY1.png",
    prophecy: "The Emperor represents authority, structure, and stability. This card suggests a time of establishing order and taking control of your situation.",
    foods: [
      {
        id: 17,
        name: "Classic Steak Dinner",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947"
      },
      {
        id: 18,
        name: "Power Protein Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 19,
        name: "Grilled Salmon",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
      },
      {
        id: 20,
        name: "Red Wine Reduction",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
      }
    ]
  },
  {
    id: 5,
    name: "The Hierophant",
    image: "https://i.imgur.com/VxwMXXA.png",
    prophecy: "The Hierophant represents tradition, spiritual guidance, and conventional wisdom. This is a time for learning from established institutions and mentors.",
    foods: [
      {
        id: 21,
        name: "Traditional Tea Ceremony",
        image: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd"
      },
      {
        id: 22,
        name: "Ancient Grain Bowl",
        image: "https://images.unsplash.com/photo-1540914124281-342587941389"
      },
      {
        id: 23,
        name: "Heritage Bread",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
      },
      {
        id: 24,
        name: "Sacred Herbs Tea",
        image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12"
      }
    ]
  },
  {
    id: 6,
    name: "The Lovers",
    image: "https://i.imgur.com/YQ8ViPX.png",
    prophecy: "The Lovers symbolize relationships, choices, and harmony. This card suggests important decisions about relationships and personal values.",
    foods: [
      {
        id: 25,
        name: "Chocolate Covered Strawberries",
        image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4"
      },
      {
        id: 26,
        name: "Heart-Shaped Pasta",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8"
      },
      {
        id: 27,
        name: "Love Potion Smoothie",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      },
      {
        id: 28,
        name: "Romantic Dinner Set",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947"
      }
    ]
  },
  {
    id: 7,
    name: "The Chariot",
    image: "https://i.imgur.com/kIRHXvX.png",
    prophecy: "The Chariot represents determination, willpower, and victory. This card suggests forward movement and overcoming obstacles through focus and drive.",
    foods: [
      {
        id: 29,
        name: "Victory Protein Shake",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      },
      {
        id: 30,
        name: "Power Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 31,
        name: "Energy Boost Smoothie",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      },
      {
        id: 32,
        name: "Champion's Breakfast",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666"
      }
    ]
  },
  {
    id: 8,
    name: "Strength",
    image: "https://i.imgur.com/FJWVQpj.png",
    prophecy: "Strength represents inner power, courage, and patience. This card suggests handling challenges with grace and inner fortitude.",
    foods: [
      {
        id: 33,
        name: "Lion's Mane Mushroom Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 34,
        name: "Power Green Smoothie",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      },
      {
        id: 35,
        name: "Warrior's Feast",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947"
      },
      {
        id: 36,
        name: "Fortifying Bone Broth",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd"
      }
    ]
  },
  {
    id: 9,
    name: "The Hermit",
    image: "https://i.imgur.com/UyCQFUe.png",
    prophecy: "The Hermit signifies introspection, inner guidance, and solitude. This is a time for self-reflection and seeking inner wisdom.",
    foods: [
      {
        id: 37,
        name: "Meditation Tea",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      },
      {
        id: 38,
        name: "Solo Dining Experience",
        image: "https://images.unsplash.com/photo-1540914124281-342587941389"
      },
      {
        id: 39,
        name: "Mindful Breakfast Bowl",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38"
      },
      {
        id: 40,
        name: "Quiet Night Soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd"
      }
    ]
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    image: "https://i.imgur.com/q3NyXX8.png",
    prophecy: "The Wheel of Fortune represents cycles, destiny, and turning points. This card suggests that change is coming, bringing new opportunities.",
    foods: [
      {
        id: 41,
        name: "Fortune Cookie Dessert",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
      },
      {
        id: 42,
        name: "Seasonal Harvest Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 43,
        name: "Lucky Charm Smoothie",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      },
      {
        id: 44,
        name: "Destiny's Plate",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947"
      }
    ]
  },
  {
    id: 11,
    name: "Justice",
    image: "https://i.imgur.com/ZPqVLp9.png",
    prophecy: "Justice represents fairness, truth, and cause and effect. This card suggests a time of accountability and making balanced decisions.",
    foods: [
      {
        id: 45,
        name: "Balanced Buddha Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 46,
        name: "Harmony Tea Set",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      },
      {
        id: 47,
        name: "Equal Parts Salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 48,
        name: "Fair Trade Coffee",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
      }
    ]
  },
  {
    id: 12,
    name: "The Hanged Man",
    image: "https://i.imgur.com/YbMnbFl.png",
    prophecy: "The Hanged Man represents surrender, letting go, and gaining new perspectives. This card suggests taking time to pause and see things differently.",
    foods: [
      {
        id: 49,
        name: "Upside Down Cake",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81"
      },
      {
        id: 50,
        name: "Suspended in Time Tea",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      },
      {
        id: 51,
        name: "Perspective Plate",
        image: "https://images.unsplash.com/photo-1540914124281-342587941389"
      },
      {
        id: 52,
        name: "Meditation Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      }
    ]
  },
  {
    id: 13,
    name: "Death",
    image: "https://i.imgur.com/oPHqpZF.png",
    prophecy: "Death represents transformation, endings, and new beginnings. This card suggests letting go of what no longer serves you to make way for renewal.",
    foods: [
      {
        id: 53,
        name: "Black Rice Bowl",
        image: "https://images.unsplash.com/photo-1540914124281-342587941389"
      },
      {
        id: 54,
        name: "Transformation Tea",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      },
      {
        id: 55,
        name: "Rebirth Juice",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      },
      {
        id: 56,
        name: "New Dawn Breakfast",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666"
      }
    ]
  },
  {
    id: 14,
    name: "Temperance",
    image: "https://i.imgur.com/eMtZcXm.png",
    prophecy: "Temperance represents balance, moderation, and patience. This card suggests finding harmony between different aspects of life.",
    foods: [
      {
        id: 57,
        name: "Balanced Bento Box",
        image: "https://images.unsplash.com/photo-1530649159659-c3ce17fd4351"
      },
      {
        id: 58,
        name: "Harmony Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 59,
        name: "Middle Path Meal",
        image: "https://images.unsplash.com/photo-1540914124281-342587941389"
      },
      {
        id: 60,
        name: "Zen Garden Tea",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      }
    ]
  },
  {
    id: 15,
    name: "The Devil",
    image: "https://i.imgur.com/Tr8ngYF.png",
    prophecy: "The Devil represents bondage, materialism, and hidden forces. This card suggests examining what holds you back and breaking free from limitations.",
    foods: [
      {
        id: 61,
        name: "Devilishly Dark Chocolate",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834"
      },
      {
        id: 62,
        name: "Temptation Cake",
        image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81"
      },
      {
        id: 63,
        name: "Spicy Devil Wings",
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7"
      },
      {
        id: 64,
        name: "Forbidden Fruit Plate",
        image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9"
      }
    ]
  },
  {
    id: 16,
    name: "The Tower",
    image: "https://i.imgur.com/Ow5dCSj.png",
    prophecy: "The Tower represents sudden change, upheaval, and revelation. This card suggests breakthrough moments that lead to necessary transformation.",
    foods: [
      {
        id: 65,
        name: "Lightning Strike Lemonade",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      },
      {
        id: 66,
        name: "Breakthrough Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 67,
        name: "Tower of Power Smoothie",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      },
      {
        id: 68,
        name: "Revolution Rolls",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
      }
    ]
  },
  {
    id: 17,
    name: "The Star",
    image: "https://i.imgur.com/GvBZwvf.png",
    prophecy: "The Star represents hope, inspiration, and serenity. This card suggests a time of healing and renewed optimism.",
    foods: [
      {
        id: 69,
        name: "Starlight Soup",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd"
      },
      {
        id: 70,
        name: "Celestial Tea",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      },
      {
        id: 71,
        name: "Healing Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 72,
        name: "Hope's Breakfast",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666"
      }
    ]
  },
  {
    id: 18,
    name: "The Moon",
    image: "https://i.imgur.com/ePDGvUh.png",
    prophecy: "The Moon represents intuition, illusion, and the subconscious. This card suggests trusting your inner guidance through uncertain times.",
    foods: [
      {
        id: 73,
        name: "Midnight Blue Tea",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      },
      {
        id: 74,
        name: "Lunar Phase Cookies",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
      },
      {
        id: 75,
        name: "Dream State Drink",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      },
      {
        id: 76,
        name: "Mystery Bowl",
        image: "https://images.unsplash.com/photo-1540914124281-342587941389"
      }
    ]
  },
  {
    id: 19,
    name: "The Sun",
    image: "https://i.imgur.com/kqVkS7K.png",
    prophecy: "The Sun represents joy, success, and vitality. This card suggests a time of happiness and positive achievements.",
    foods: [
      {
        id: 77,
        name: "Sunshine Breakfast",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666"
      },
      {
        id: 78,
        name: "Golden Turmeric Latte",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5"
      },
      {
        id: 79,
        name: "Radiant Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 80,
        name: "Joy Juice",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      }
    ]
  },
  {
    id: 20,
    name: "Judgement",
    image: "https://i.imgur.com/0YMlULQ.png",
    prophecy: "Judgement represents awakening, renewal, and self-evaluation. This card suggests a time of reflection and rebirth.",
    foods: [
      {
        id: 81,
        name: "Awakening Tea",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      },
      {
        id: 82,
        name: "Renewal Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 83,
        name: "Clear Mind Juice",
        image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4"
      },
      {
        id: 84,
        name: "Truth Seeker's Plate",
        image: "https://images.unsplash.com/photo-1540914124281-342587941389"
      }
    ]
  },
  {
    id: 21,
    name: "The World",
    image: "https://i.imgur.com/PCGzwPR.png",
    prophecy: "The World represents completion, integration, and accomplishment. This card suggests a time of fulfillment and successful conclusion.",
    foods: [
      {
        id: 85,
        name: "Global Fusion Bowl",
        image: "https://images.unsplash.com/photo-1540914124281-342587941389"
      },
      {
        id: 86,
        name: "World Peace Tea",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      },
      {
        id: 87,
        name: "Celebration Plate",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947"
      },
      {
        id: 88,
        name: "Unity Feast",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      }
    ]
  }
];