interface FoodItem {
    id: number;
    title: string;
    description: string;
    image: string;
  }
  
  interface MoodFoods {
    [key: string]: FoodItem[];
  }
  
  export const foodData: MoodFoods = {
    happy: [
      {
        id: 1,
        title: "Fresh Fruit Smoothie Bowl",
        description: "A vibrant bowl of blended fruits topped with granola, fresh berries, and honey that brings joy to your day.",
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38"
      },
      {
        id: 2,
        title: "Rainbow Sushi Roll",
        description: "Colorful and delightful sushi roll filled with fresh ingredients that make every bite a happy moment.",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
      },
      {
        id: 3,
        title: "Chocolate Chip Pancakes",
        description: "Fluffy pancakes studded with chocolate chips and drizzled with maple syrup - pure happiness on a plate.",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93"
      },
      {
        id: 4,
        title: "Ice Cream Sundae",
        description: "A classic dessert with multiple scoops of ice cream, whipped cream, and colorful toppings.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
      },
      {
        id: 5,
        title: "Fresh Spring Rolls",
        description: "Light and refreshing rolls filled with vegetables and herbs, perfect for a happy healthy meal.",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb"
      },
      {
        id: 6,
        title: "Margherita Pizza",
        description: "Classic Italian pizza with fresh basil, mozzarella, and tomatoes that brings a smile to your face.",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca"
      },
      {
        id: 7,
        title: "Fruit Tart",
        description: "Beautiful tart filled with custard and topped with fresh seasonal fruits.",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13"
      },
      {
        id: 8,
        title: "Colorful Buddha Bowl",
        description: "Nutritious bowl filled with quinoa, roasted vegetables, and tahini dressing.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 9,
        title: "Mango Sticky Rice",
        description: "Sweet Thai dessert with fresh mango and coconut milk that brings tropical happiness.",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b"
      },
      {
        id: 10,
        title: "Rainbow Macarons",
        description: "Delicate French cookies in various flavors and colors that spark joy.",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43"
      }
    ],
    angry: [
      {
        id: 11,
        title: "Spicy Ramen",
        description: "Extra spicy ramen with rich broth and tender meat to help release that anger.",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624"
      },
      {
        id: 12,
        title: "Hot Wings",
        description: "Fiery chicken wings that match your current mood with extra hot sauce.",
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7"
      },
      {
        id: 13,
        title: "Volcano Roll",
        description: "Spicy sushi roll topped with spicy mayo and sriracha sauce.",
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56"
      },
      {
        id: 14,
        title: "Devil's Curry",
        description: "Extra spicy curry that will make you forget why you were angry.",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd"
      },
      {
        id: 15,
        title: "Szechuan Hot Pot",
        description: "Numbing and spicy hot pot that matches your fiery mood.",
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec"
      },
      {
        id: 16,
        title: "Ghost Pepper Burger",
        description: "Burger with ghost pepper sauce that's as intense as your anger.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
      },
      {
        id: 17,
        title: "Inferno Pasta",
        description: "Pasta with extremely spicy arrabiata sauce to match your mood.",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8"
      },
      {
        id: 18,
        title: "Fire Chicken",
        description: "Korean fire chicken that's as hot as your temper.",
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc"
      },
      {
        id: 19,
        title: "Dynamite Shrimp",
        description: "Explosive spicy shrimp that will blow your anger away.",
        image: "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e"
      },
      {
        id: 20,
        title: "Wasabi Bomb Sushi",
        description: "Sushi with extra wasabi to clear your mind.",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351"
      }
    ],
    surprise: [
      {
        id: 21,
        title: "Mystery Bento Box",
        description: "A surprise selection of Japanese dishes in a beautiful bento box.",
        image: "https://images.unsplash.com/photo-1530649159659-c3c5d3d2fb3b"
      },
      {
        id: 22,
        title: "Chef's Special",
        description: "Daily surprise creation from our chef's imagination.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947"
      },
      {
        id: 23,
        title: "Fusion Tacos",
        description: "Unexpected combination of global flavors in taco form.",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b"
      },
      {
        id: 24,
        title: "Color-changing Drink",
        description: "Magical drink that changes color as you mix it.",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e"
      },
      {
        id: 25,
        title: "Mystery Dessert Box",
        description: "Selection of surprising dessert combinations.",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777"
      },
      {
        id: 26,
        title: "Surprise Dim Sum",
        description: "Assorted dim sum with unexpected fillings.",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d"
      },
      {
        id: 27,
        title: "Hidden Center Cake",
        description: "Cake with a surprising center that's revealed when cut.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
      },
      {
        id: 28,
        title: "Rainbow Dumplings",
        description: "Colorful dumplings with unexpected flavor combinations.",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d"
      },
      {
        id: 29,
        title: "Mystery Food Challenge",
        description: "A surprise dish that challenges your taste buds.",
        image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826"
      },
      {
        id: 30,
        title: "Unexpected Pizza",
        description: "Pizza with surprising topping combinations.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
      }
    ],
    fear: [
      {
        id: 31,
        title: "Comfort Mac & Cheese",
        description: "Creamy, warm mac & cheese to comfort your fears away.",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686"
      },
      {
        id: 32,
        title: "Warm Chicken Soup",
        description: "Soothing chicken soup that feels like a warm hug.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd"
      },
      {
        id: 33,
        title: "Calming Chamomile Tea",
        description: "Relaxing tea with honey to ease your mind.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
      },
      {
        id: 34,
        title: "Chocolate Lava Cake",
        description: "Warm chocolate cake that melts away your worries.",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51"
      },
      {
        id: 35,
        title: "Warm Apple Pie",
        description: "Classic apple pie that reminds you of home.",
        image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e9a5"
      },
      {
        id: 36,
        title: "Mashed Potatoes",
        description: "Creamy mashed potatoes for comfort and warmth.",
        image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389"
      },
      {
        id: 37,
        title: "Warm Cinnamon Roll",
        description: "Freshly baked cinnamon roll to comfort your soul.",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812"
      },
      {
        id: 38,
        title: "Hot Chocolate",
        description: "Rich hot chocolate topped with marshmallows.",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed"
      },
      {
        id: 39,
        title: "Warm Cookie",
        description: "Fresh-baked cookie that makes everything better.",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
      },
      {
        id: 40,
        title: "Healing Porridge",
        description: "Warm, comforting porridge with honey and fruits.",
        image: "https://images.unsplash.com/photo-1544489518-2716c4e1b68d"
      }
    ],
    envy: [
      {
        id: 41,
        title: "Green Goddess Bowl",
        description: "Nutritious bowl filled with various green vegetables.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      {
        id: 42,
        title: "Matcha Latte",
        description: "Rich green tea latte with beautiful latte art.",
        image: "https://images.unsplash.com/photo-1536013455962-2f6bc76fff66"
      },
      {
        id: 43,
        title: "Avocado Toast",
        description: "Instagram-worthy avocado toast with perfect toppings.",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d"
      },
      {
        id: 44,
        title: "Green Curry",
        description: "Aromatic Thai green curry with vegetables.",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd"
      },
      {
        id: 45,
        title: "Green Smoothie",
        description: "Healthy green smoothie packed with nutrients.",
        image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec"
      },
      {
        id: 46,
        title: "Pistachio Dessert",
        description: "Elegant pistachio-based dessert that's picture-perfect.",
        image: "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e"
      },
      {
        id: 47,
        title: "Green Tea Ice Cream",
        description: "Smooth matcha ice cream with traditional flavors.",
        image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7"
      },
      {
        id: 48,
        title: "Kiwi Tart",
        description: "Beautiful tart topped with fresh kiwi slices.",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13"
      },
      {
        id: 49,
        title: "Green Pesto Pasta",
        description: "Fresh pasta with homemade basil pesto.",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
      },
      {
        id: 50,
        title: "Green Tea Mochi",
        description: "Soft and chewy matcha mochi dessert.",
        image: "https://images.unsplash.com/photo-1505253668822-42074d58a7c6"
      }
    ]
  };