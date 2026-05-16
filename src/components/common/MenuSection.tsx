import { useState, useEffect, type JSX } from "react";
import { SectionHeader, BakeryLoader, ScrollAnimation } from "../common";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: string;
}

const WHATSAPP_NUMBER = "233531830827";

const items: MenuItem[] = [
  {
    name: "Chocolate Cake",
    price: "GH₵ 120",
    category: "Cakes",
    image: "/menu/chocolatecake.jpeg",
  },
  {
    name: "Vanilla Cake",
    price: "GH₵ 110",
    category: "Cakes",
    image: "/menu/Vanillacake.jpeg",
  },
  {
    name: "Red Velvet Cake",
    price: "GH₵ 140",
    category: "Cakes",
    image: "/menu/redvelvetcake.jpeg",
  },
  {
    name: "Strawberry Cake",
    price: "GH₵ 130",
    category: "Cakes",
    image: "menu/strawberrycake.jpeg",
  },
  {
    name: "All Wedding Cake",
    price: "GH₵ 500+",
    category: "Cakes",
    image: "menu/weddingcake.jpeg",
  },
  {
    name: "Mixed Marble Cake",
    price: "GH₵ 125",
    category: "Cakes",
    image: "menu/mixedmablecake.jpeg",
  },
  {
    name: "Coconut Cake",
    price: "GH₵ 115",
    category: "Cakes",
    image: "menu/coconutcake.jpeg",
  },
  {
    name: "Carrot Cake",
    price: "GH₵ 135",
    category: "Cakes",
    image: "menu/carrotcake.jpeg",
  },

  {
    name: "Vanilla Cupcakes",
    price: "GH₵ 40",
    category: "Cupcakes",
    image: "menu/vanillacupcake.jpeg",
  },
  {
    name: "Chocolate Cupcakes",
    price: "GH₵ 45",
    category: "Cupcakes",
    image: "menu/chocolatecupcake.jpeg",
  },
  {
    name: "Cupcake",
    price: "GH₵ 50",
    category: "Cupcakes",
    image: "menu/cupcake.jpeg",
  },
  {
    name: "Mini Birthday Cakes",
    price: "GH₵ 60",
    category: "Cupcakes",
    image: "menu/minibirthdaycake.jpeg",
  },

  {
    name: "Meat Pie",
    price: "GH₵ 12",
    category: "Pastries",
    image: "menu/meatpie.jpeg",
  },
  {
    name: "Chicken Pie",
    price: "GH₵ 14",
    category: "Pastries",
    image: "menu/chickenpie.jpeg",
  },
  {
    name: "Golden EggRolls",
    price: "GH₵ 10",
    category: "Rolls",
    image: "menu/goldeneggrolls.jpeg",
  },
  {
    name: "Chin Chin",
    price: "GH₵ 15",
    category: "Pastries",
    image: "menu/chinchin.jpeg",
  },
  {
    name: "Cheese Puff",
    price: "GH₵ 8",
    category: "Pastries",
    image: "menu/cheesecake.jpeg",
  },
  {
    name: "Milky Doughnuts",
    price: "GH₵ 20",
    category: "Pastries",
    image: "menu/milkydoughnut.jpeg",
  },

  {
    name: "Chocolate Doughnut",
    price: "GH₵ 20",
    category: "Pastries",
    image: "menu/chocolatedoughnut.jpeg",
  },
  {
    name: "Egg Buns",
    price: "GH₵ 16",
    category: "Pastries",
    image: "menu/eggbuns.jpeg",
  },
  {
    name: "Shawarma",
    price: "GH₵ 18",
    category: "Pastries",
    image: "menu/shawama.jpeg",
  },
  {
    name: "Pizza",
    price: "GH₵ 17",
    category: "Pastries",
    image: "menu/pizza.jpeg",
  },
  {
    name: "Samosa",
    price: "GH₵ 20",
    category: "Pastries",
    image: "menu/samosa.jpeg",
  },
  {
    name: "RockBuns",
    price: "GH₵ 15",
    category: "Rokies",
    image: "menu/rockbuns.jpeg",
  },

  {
    name: "Burger",
    price: "GH₵ 10",
    category: "Pastries",
    image: "menu/burger.jpeg",
  },
  {
    name: "Sausage Roll",
    price: "GH₵ 12",
    category: "Rolls",
    image: "menu/sausageroll.jpeg",
  },
  {
    name: "Spring Roll",
    price: "GH₵ 12",
    category: "Rolls",
    image: "menu/springroll.jpeg",
  },
  {
    name: "FruitChips",
    price: "GH₵ 18",
    category: "Chips",
    image: "menu/fruitchips.jpeg",
  },

  {
    name: "Plantain Chips",
    price: "GH₵ 60",
    category: "Chips",
    image: "menu/plantainchips.jpeg",
  },
  {
    name: "Potatoes Chips",
    price: "GH₵ 25",
    category: "Chips",
    image: "menu/potatochips.jpeg",
  },
  {
    name: "Corn Chips",
    price: "GH₵ 45",
    category: "Chips",
    image: "menu/cornchips.jpeg",
  },
  {
    name: "Assorted Food Services",
    price: "GH₵ 50+",
    category: "Food",
    image: "menu/foods.jpeg",
  },
  {
    name: "Multy Fruit Drinks",
    price: "GH₵ 35",
    category: "Desserts",
    image: "menu/multifruitdrink.jpeg",
  },
  {
    name: "Banana Bread",
    price: "GH₵ 35",
    category: "Breads",
    image: "menu/bananabread.jpeg",
  },
  {
    name: "Milk Bread",
    price: "GH₵ 35",
    category: "Bread",
    image: "menu/milkbread.jpeg",
  },
  {
    name: "Wheat Bread",
    price: "GH₵ 35",
    category: "Bread",
    image: "menu/wheatbread.jpeg",
  },
  {
    name: "Butter Bread",
    price: "GH₵ 35",
    category: "Bread",
    image: "menu/butterbread.jpeg",
  },
  {
    name: "Bread Sandwich",
    price: "GH₵ 35",
    category: "Bread",
    image: "menu/breadsandwhish.jpeg",
  },
  {
    name: "Burgette",
    price: "GH₵ 35",
    category: "Bread",
    image: "menu/z2.jpeg",
  },
  {
    name: "Round Rolls",
    price: "GH₵ 35",
    category: "Rolls",
    image: "menu/z1.jpeg",
  },
];

export default function BakeryMenuPage(): JSX.Element {
  const [page, setPage] = useState(1);
  const [loadingItem, setLoadingItem] = useState<string | null>(null);
  const [loadingPage, setLoadingPage] = useState<number | null>(null);

  const itemsPerPage = 8;
  const start = (page - 1) * itemsPerPage;
  const paginatedItems = items.slice(start, start + itemsPerPage);

  const sendWhatsApp = (item: MenuItem) => {
    const message = `Hello De Precious Bakery 👋%0A%0AI want to order:%0A🍰 Product: ${item.name}%0A💰 Price: ${item.price}%0A📂 Category: ${item.category}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  const handleOrder = (item: MenuItem) => {
    setLoadingItem(item.name);
    setTimeout(() => {
      window.open(sendWhatsApp(item), "_blank");
      setLoadingItem(null);
    }, 1200);
  };

  const handlePageChange = (p: number) => {
    setLoadingPage(p);
    setTimeout(() => {
      setPage(p);
      setLoadingPage(null);
    }, 800);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-[#0b0b10] text-white">
      {/* LOADER */}
      {(loadingItem || loadingPage) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <BakeryLoader size="medium" />
        </div>
      )}

      {/* HERO */}
      <div className="text-center py-20 px-6">
        <SectionHeader
          subtitle="DePrecious Bakery"
          title="Our Menu"
          highlight="Delicious Bakes & Treats"
          description="Explore our baked goods crafted with love."
          light
        />
      </div>

      {/* GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {paginatedItems.map((item, index) => (
            <ScrollAnimation
          key={item.name}
          delay={index * 0.15}
          y={50}
          duration={0.7}
          scale={0.95}
          >
            <div
              className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden"
            >
              <img src={item.image} className="w-full h-50 object-cover " />

              <div className="p-4">
                <h3 className="font-bold text-sm">{item.name}</h3>
                <p className="text-xs text-gray-400">{item.category}</p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-pink-400 font-bold text-sm">
                    {item.price}
                  </span>

                  <button
                    onClick={() => handleOrder(item)}
                    disabled={loadingItem === item.name}
                    className="text-xs bg-green-500 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {loadingItem === item.name ? (
                      <>
                        <BakeryLoader size="small" fullScreen={false} />
                        Sending...
                      </>
                    ) : (
                      "Order WhatsApp"
                    )}
                  </button>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* PAGINATION */}
      <div className="flex justify-center gap-3 pb-20">
        {[1, 2, 3, 4, 5].map((p) => (
          <button
            key={p}
            onClick={() => handlePageChange(p)}
            disabled={loadingPage === p}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 ${
              page === p ? "bg-pink-500" : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {loadingPage === p ? (
              <BakeryLoader size="small" fullScreen={false} />
            ) : (
              p
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
