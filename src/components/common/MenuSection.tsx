import { useState, useEffect, type JSX } from "react";
import { SectionHeader, BakeryLoader, ScrollAnimation } from "../common";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  price: string;
  image: string;
  category: string;
  quantity: string;
  
}

const WHATSAPP_NUMBER = "233531830827";

const items: MenuItem[] = [
  {
    name: "Chocolate Cake",
    price: "GH₵ 180",
    category: "Cakes",
    image: "/menu/chocolatecake.jpeg",
    quantity:"1 ",
  },
  {
    name: "Vanilla Cake",
    price: "GH₵ 150",
    category: "Cakes",
    image: "/menu/Vanillacake.jpeg",
    quantity:"1",
  },
  {
    name: "Red Velvet Cake",
    price: "GH₵ 180",
    category: "Cakes",
    image: "/menu/redvelvetcake.jpeg",
    quantity:"1",
  },
  {
    name: "Strawberry Cake",
    price: "GH₵ 250",
    category: "Cakes",
    image: "menu/strawberrycake.jpeg",
    quantity:"1",
  },
  {
    name: "All Wedding Cake",
    price: "GH₵ 500+",
    category: "Cakes",
    image: "menu/weddingcake.jpeg",
    quantity:"Base On Size",
  },
  {
    name: "Mixed Marble Cake",
    price: "GH₵ 300",
    category: "Cakes",
    image: "menu/mixedmablecake.jpeg",
    quantity:"1",
  },

  {
    name: "Fruit Cake",
    price: "GH₵ 300",
    category: "Cakes",
    image: "menu/mixedmablecake.jpeg",
    quantity:"1",
  },
  {
    name: "Coconut Cake",
    price: "GH₵ 200",
    category: "Cakes",
    image: "menu/coconutcake.jpeg",
    quantity:"1",
  },
  {
    name: "Carrot Cake",
    price: "GH₵ 180",
    category: "Cakes",
    image: "menu/carrotcake.jpeg",
    quantity:"1",
  },

  {
    name: "Vanilla Cupcakes",
    price: "GH₵ 180",
    category: "Cupcakes",
    image: "menu/vanillacupcake.jpeg",
    quantity:"6 Pieces",
  },
  {
    name: "Chocolate Cupcakes",
    price: "GH₵ 220",
    category: "Cupcakes",
    image: "menu/chocolatecupcake.jpeg",
    quantity:"6 Pieces",
  },
  {
    name: "Cupcake",
    price: "GH₵ 180",
    category: "Cupcakes",
    image: "menu/cupcake.jpeg",
    quantity:"6 Pieces",
  },
  {
    name: "Mini Birthday Cakes",
    price: "GH₵ 200",
    category: "Cupcakes",
    image: "menu/minibirthdaycake.jpeg",
    quantity:"1",
  },

  {
    name: "Meat Pie",
    price: "GH₵ 25",
    category: "Pastries",
    image: "menu/meatpie.jpeg",
    quantity:"1",
  },
  {
    name: "Chicken Pie",
    price: "GH₵ 35",
    category: "Pastries",
    image: "menu/chickenpie.jpeg",
    quantity:"1",
  },
  {
    name: "Golden EggRolls",
    price: "GH₵ 10",
    category: "Rolls",
    image: "menu/goldeneggrolls.jpeg",
    quantity:"1",
  },
  {
    name: "Chin Chin",
    price: "GH₵ 80+",
    category: "Pastries",
    image: "menu/chinchin.jpeg",
    quantity:"Depends on Quantity"
  },
  {
    name: "Cheese Cake",
    price: "GH₵ 350",
    category: "Pastries",
    image: "menu/cheesecake.jpeg",
    quantity:"1",
  },
  {
    name: "Milky Doughnuts",
    price: "GH₵ 200",
    category: "Pastries",
    image: "menu/milkydoughnut.jpeg",
    quantity:"Box Of Six",
  },

  {
    name: "Mini Chocolate Doughnut",
    price: "GH₵ 200",
    category: "Pastries",
    image: "menu/chocolatedoughnut.jpeg",
    quantity:"40 pieces",
  },

  {
    name: "Large Chocolate Doughnut",
    price: "GH₵ 250",
    category: "Pastries",
    image: "menu/chocolatedoughnut.jpeg",
    quantity:"40 pieces",
  },
  {
    name: "Egg Buns",
    price: "GH₵ 10",
    category: "Pastries",
    image: "menu/eggbuns.jpeg",
    quantity:"1",
  },
  {
    name: "Shawarma",
    price: "GH₵ 80",
    category: "Pastries",
    image: "menu/shawama.jpeg",
    quantity:"1",
  },
  {
    name: "Mini Pizza",
    price: "GH₵ 200",
    category: "Pastries",
    image: "menu/pizza.jpeg",
    quantity:"12 pieces",
  },
  {
    name: "Samosa",
    price: "GH₵ 50",
    category: "Pastries",
    image: "menu/samosa.jpeg",
    quantity:"6 pieces",
  },
  {
    name: "RockBuns",
    price: "GH₵ 40",
    category: "Rokies",
    image: "menu/rockbuns.jpeg",
    quantity:"5 pieces",
  },

  {
    name: "Burger",
    price: "GH₵ 55",
    category: "Pastries",
    image: "menu/burger.jpeg",
    quantity:"2 pieces",
  },
  {
    name: "Sausage Roll",
    price: "GH₵ 25",
    category: "Rolls",
    image: "menu/sausageroll.jpeg",
    quantity:"1"
  },
  {
    name: "Spring Roll",
    price: "GH₵ 50",
    category: "Rolls",
    image: "menu/springroll.jpeg",
    quantity:"7 pieces",
  },
  {
    name: "Plantain Chips",
    price: "GH₵ 30",
    category: "Chips",
    image: "menu/plantainchips.jpeg",
    quantity:"1",
  },
  {
    name: "Potatoes Chips",
    price: "GH₵ 30",
    category: "Chips",
    image: "menu/potatochips.jpeg",
    quantity:"1",
  },
  
  {
    name: "Assorted Food Services",
    price: "GH₵ 80",
    category: "Food",
    image: "menu/foods.jpeg",
    quantity:"Per Plate",
  },
  {
    name: "Multy Fruit Drinks",
    price: "GH₵ 60",
    category: "Desserts",
    image: "menu/multifruitdrink.jpeg",
    quantity:"1 each",
  },
  {
    name: "Banana Bread",
    price: "GH₵ 60",
    category: "Breads",
    image: "menu/bananabread.jpeg",
    quantity:"1",
  },
  {
    name: "Milk Bread",
    price: "GH₵ 55",
    category: "Bread",
    image: "menu/milkbread.jpeg",
    quantity:"1",
  },
  {
    name: "Wheat Bread",
    price: "GH₵ 60",
    category: "Bread",
    image: "menu/wheatbread.jpeg",
    quantity:"1",
  },
  {
    name: "Butter Bread",
    price: "GH₵ 40",
    category: "Bread",
    image: "menu/butterbread.jpeg",
    quantity:"1",
  },
  {
    name: "Bread Sandwich",
    price: "GH₵ 40",
    category: "Bread",
    image: "menu/breadsandwhish.jpeg",
    quantity:"1",
  },
  {
    name: "ButterBread with ChocolateToppings",
    price: "GH₵ 35",
    category: "Bread",
    image: "menu/z2.jpeg",
    quantity:"1",
  },
  {
    name: "Cinnamon Rolls",
    price: "GH₵ 35",
    category: "Rolls",
    image: "menu/z1.jpeg",
    quantity:"1",
  },
];

const MenuSection = (): JSX.Element => {
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
                <p className="text-bold text-warmpink">{item.quantity}</p>

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

export default MenuSection;
